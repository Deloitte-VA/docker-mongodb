import pytest

# A global setup.  Just follow the naming to use.
def setup_module(module):
    print('\nsetup_module()')

# A global teardown.  Just follow the naming to use.
def teardown_module(module):
    print('\nteardown_module()')

# define a function for use in your testing
def func(x):
    return x + 1

# All test cases should start with "test_" and should likely assert something.
def test_answer():
    assert func(4) == 5

# This is a way to create fixtures.  This particular example
# shows how to add setup/teardown to certain functions in a
# module, rather than the entire module.
@pytest.fixture(scope='module')
def resource_a_setup(request):
    print('\nresources_a_setup()')
    def resource_a_teardown():
        print('\nresources_a_teardown()')
    request.addfinalizer(resource_a_teardown)
                             
def test_1_that_needs_resource_a(resource_a_setup):
    print('test_1_that_needs_resource_a()')
                                      
def test_2_that_does_not():
    print('\ntest_2_that_does_not()')

def test_3_that_does(resource_a_setup):
    print('\ntest_3_that_does()')

# How to test that an exception is raised
# when you are deliberately raising an exception
def test_zero_division():
    with pytest.raises(ZeroDivisionError):
        1 / 0

# How to test an expected failure, or an exception
# that is raised when you aren't deliberately raising 
# an exception.  Should be used when you find new bugs
@pytest.mark.xfail(raises=NameError, reason="SNPPROT-232")
def test_f():
    f()
