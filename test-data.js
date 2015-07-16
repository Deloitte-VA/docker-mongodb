var conn;
while(conn===undefined)
{
    try
    {
        conn = new Mongo();
    }
    catch(Error)
    {
        print(Error);
    }
    print("sleep...");
    sleep(1000);
}

print("setting up db...");
var mydb = conn.getDB( "test" );


print("starting inserts...");

//Insert data into the PCE collection.
//PCE collection.
mydb.pces.insert( 
	[
		{ "_id": NumberLong(5695930304), "desc": "5695930315 |Systolic Blood Pressure (Observable Entity)| + 5695444314 |Procedure on upper arm| + 5695444316 |Right upper arm structure (body structure)|" }, 
		{ "_id": NumberLong(5695930307), "desc": "5695444313 |Diastolic Blood Pressure (Observable Entity)| + 5695444314 |Procedure on upper arm| + 5695444316 |Right upper arm structure (body structure)|" }, 
		{ "_id": NumberLong(5695930310), "desc": "5695930315 |Systolic Blood Pressure (Observable Entity)| + 5695444314 |Procedure on upper arm| + 5695444315 |Left upper arm structure (body structure)|" }, 
		{ "_id": NumberLong(5695930313), "desc": "5695444313 |Diastolic Blood Pressure (Observable Entity)| + 5695444314 |Procedure on upper arm| + 5695444315 |Left upper arm structure (body structure)|" },
		
		{ "_id": NumberLong(5695444313), "desc": "271650006 |Diastolic Blood Pressure (Observable Entity)|" },
		{ "_id": NumberLong(5695444314), "desc": "118704009 |Procedure on upper arm|" },
		{ "_id": NumberLong(5695444315), "desc": "368208006 |Left upper arm structure (body structure)|" },
		{ "_id": NumberLong(5695444316), "desc": "368209003 |Right upper arm structure (body structure)|" },
		{ "_id": NumberLong(5695930315), "desc": "271649006 |Systolic Blood Pressure (Observable Entity)|" }

	]
);

//Insert data into the Patients collection.
//Patient collection.
mydb.patients.insert( 
	[
		{ "_id": ObjectId("55a7d59bdaafacc0dc684f44"), "first_name": "Brian", "middle_name": "Agnese", "last_name": "Wilson", "dob": new Date('04/15/1955').getTime()/86400000, "gender": NumberInt(1), "race": NumberInt(1) },
		{ "_id": ObjectId("55a7d620daafacc0dc684f45"), "first_name": "Diann", "middle_name": "Agnese", "last_name": "Ayers", "dob": new Date('04/15/1955').getTime()/86400000, "gender": NumberInt(1), "race": NumberInt(1) },
		{ "_id": ObjectId("55a7d916daafacc0dc684f46"), "first_name": "Annalee", "middle_name": "Marlee", "last_name": "Coleman", "dob": new Date('04/15/1955').getTime()/86400000, "gender": NumberInt(1), "race": NumberInt(1) }, 
		{ "_id": ObjectId("55a7d960daafacc0dc684f47"), "first_name": "Victor", "middle_name": "Menahem", "last_name": "Lemmi", "dob": new Date('04/15/1955').getTime()/86400000, "gender": NumberInt(2), "race": NumberInt(1) }, 
		{ "_id": ObjectId("55a7d9b7daafacc0dc684f48"), "first_name": "Christi", "middle_name": "Battista", "last_name": "Tobin", "dob": new Date('04/15/1955').getTime()/86400000, "gender": NumberInt(1), "race": NumberInt(1) }, 
		{ "_id": ObjectId("55a7d9d0daafacc0dc684f49"), "first_name": "Kerrie", "middle_name": "Gottlob", "last_name": "Fiscella", "dob": new Date('04/15/1955').getTime()/86400000, "gender": NumberInt(1), "race": NumberInt(1) }, 
		{ "_id": ObjectId("55a7da09daafacc0dc684f4a"), "first_name": "Kathy", "middle_name": "Jennifer", "last_name": "Simpson", "dob": new Date('04/15/1955').getTime()/86400000, "gender": NumberInt(2), "race": NumberInt(1) },
		{ "_id": ObjectId("55a7dbb6daafacc0dc684f4b"), "first_name": "Nina", "middle_name": "Audie", "last_name": "Breckenridge", "dob": new Date('04/15/1955').getTime()/86400000, "gender": NumberInt(1), "race": NumberInt(1) }, 
		{ "_id": ObjectId("55a7dbcfdaafacc0dc684f4c"), "first_name": "Dollie", "middle_name": "Jennie", "last_name": "Barnes", "dob": new Date('04/15/1955').getTime()/86400000, "gender": NumberInt(1), "race": NumberInt(1) }, 
		{ "_id": ObjectId("55a7dbf4daafacc0dc684f4d"), "first_name": "Tayla", "middle_name": "Casey", "last_name": "Geiger", "dob": new Date('04/15/1955').getTime()/86400000, "gender": NumberInt(1), "race": NumberInt(1) }, 
		{ "_id": ObjectId("55a7dc06daafacc0dc684f4e"), "first_name": "Jeanne", "middle_name": "Ovidio", "last_name": "Morrison", "dob": new Date('04/15/1955').getTime()/86400000, "gender": NumberInt(1), "race": NumberInt(2) }, 
		{ "_id": ObjectId("55a7dc1cdaafacc0dc684f4f"), "first_name": "Romano", "middle_name": "Horatio", "last_name": "Wash", "dob": new Date('04/15/1955').getTime()/86400000, "gender": NumberInt(2), "race": NumberInt(1) }, 	
		{ "_id": ObjectId("55a7dc2ddaafacc0dc684f50"), "first_name": "Anthony", "middle_name": "Michael", "last_name": "Campo", "dob": new Date('04/15/1955').getTime()/86400000, "gender": NumberInt(1), "race": NumberInt(1) },
		{ "_id": ObjectId("55a7dc4adaafacc0dc684f51"), "first_name": "Zion", "middle_name": "Jaki", "last_name": "Ridley", "dob": new Date('04/15/1955').getTime()/86400000, "gender": NumberInt(2), "race": NumberInt(4) },
		{ "_id": ObjectId("55a7dc61daafacc0dc684f52"), "first_name": "Jonathon", "middle_name": "Greg", "last_name": "Colbert", "dob": new Date('04/15/1955').getTime()/86400000, "gender": NumberInt(2), "race": NumberInt(1) },
		{ "_id": ObjectId("55a7dc7fdaafacc0dc684f53"), "first_name": "Kimberly", "middle_name": "Vivyan", "last_name": "Vipond", "dob": new Date('04/15/1955').getTime()/86400000, "gender": NumberInt(1), "race": NumberInt(4) },
		{ "_id": ObjectId("55a7dc90daafacc0dc684f54"), "first_name": "Fanny", "middle_name": "Sadb", "last_name": "Altimari", "dob": new Date('04/15/1955').getTime()/86400000, "gender": NumberInt(1), "race": NumberInt(3) },
		{ "_id": ObjectId("55a7dca7daafacc0dc684f55"), "first_name": "Guy", "middle_name": "Bob", "last_name": "Johnson", "dob": new Date('04/15/1955').getTime()/86400000, "gender": NumberInt(2), "race": NumberInt(2) },
		{ "_id": ObjectId("55a7dcb9daafacc0dc684f56"), "first_name": "Hannah", "middle_name": "Conall", "last_name": "Peterson", "dob": new Date('04/15/1955').getTime()/86400000, "gender": NumberInt(1), "race": NumberInt(1) },
		{ "_id": ObjectId("55a7dcd5daafacc0dc684f57"), "first_name": "Clarissa", "middle_name": "Dorothea", "last_name": "Fay", "dob": new Date('04/15/1955').getTime()/86400000, "gender": NumberInt(1), "race": NumberInt(5) },
		{ "_id": ObjectId("55a7dcf0daafacc0dc684f58"), "first_name": "Liberty", "middle_name": "Vinzent", "last_name": "Coel", "dob": new Date('04/15/1955').getTime()/86400000, "gender": NumberInt(1), "race": NumberInt(2) },
		{ "_id": ObjectId("55a7dd3cdaafacc0dc684f59"), "first_name": "Roscoe", "middle_name": "Alvin", "last_name": "Franklin", "dob": new Date('04/15/1955').getTime()/86400000, "gender": NumberInt(2), "race": NumberInt(1) },	
		{ "_id": ObjectId("55a7dd53daafacc0dc684f5a"), "first_name": "Faye", "middle_name": "Wilmer", "last_name": "Sexton", "dob": new Date('04/15/1955').getTime()/86400000, "gender": NumberInt(1), "race": NumberInt(5) },
		{ "_id": ObjectId("55a7de82daafacc0dc684f5b"), "first_name": "Sergio", "middle_name": "Kalyn", "last_name": "Allard", "dob": new Date('04/15/1955').getTime()/86400000, "gender": NumberInt(2), "race": NumberInt(4) },
		{ "_id": ObjectId("55a7de94daafacc0dc684f5c"), "first_name": "Adelina", "middle_name": "Sheldon", "last_name": "Tirrell", "dob": new Date('04/15/1955').getTime()/86400000, "gender": NumberInt(1), "race": NumberInt(1) },
		{ "_id": ObjectId("55a7deb9daafacc0dc684f5d"), "first_name": "Lanny", "middle_name": "Michela", "last_name": "McNaughton", "dob": new Date('04/15/1955').getTime()/86400000, "gender": NumberInt(1), "race": NumberInt(1) },
		{ "_id": ObjectId("55a7decfdaafacc0dc684f5e"), "first_name": "Matteo", "middle_name": "Henrike", "last_name": "Brennan", "dob": new Date('04/15/1955').getTime()/86400000, "gender": NumberInt(2), "race": NumberInt(2) },
		{ "_id": ObjectId("55a7dee2daafacc0dc684f5f"), "first_name": "Richard", "middle_name": "Demetrio", "last_name": "Jernigan", "dob": new Date('04/15/1955').getTime()/86400000, "gender": NumberInt(2), "race": NumberInt(3) },
		{ "_id": ObjectId("55a7def8daafacc0dc684f60"), "first_name": "Melany", "middle_name": "Chanel", "last_name": "Durant", "dob": new Date('04/15/1955').getTime()/86400000, "gender": NumberInt(1), "race": NumberInt(1) },
		{ "_id": ObjectId("55a7df0ddaafacc0dc684f61"), "first_name": "Christine", "middle_name": "Karl", "last_name": "Haley", "dob": new Date('04/15/1955').getTime()/86400000, "gender": NumberInt(1), "race": NumberInt(2) },
		{ "_id": ObjectId("55a7df2bdaafacc0dc684f62"), "first_name": "Claudia", "middle_name": "Alannah", "last_name": "Connell", "dob": new Date('04/15/1955').getTime()/86400000, "gender": NumberInt(1), "race": NumberInt(3) },
		{ "_id": ObjectId("55a7df3fdaafacc0dc684f63"), "first_name": "Billie", "middle_name": "Brad", "last_name": "Pisani", "dob": new Date('04/15/1955').getTime()/86400000, "gender": NumberInt(2), "race": NumberInt(1) },
		{ "_id": ObjectId("55a7df59daafacc0dc684f64"), "first_name": "Lorena", "middle_name": "Bridger", "last_name": "Jack", "dob": new Date('04/15/1955').getTime()/86400000, "gender": NumberInt(1), "race": NumberInt(1) },
		{ "_id": ObjectId("55a7e1badaafacc0dc684f65"), "first_name": "Elisabeth", "middle_name": "Sesto", "last_name": "Trudu", "dob": new Date('04/15/1955').getTime()/86400000, "gender": NumberInt(1), "race": NumberInt(1) },
		{ "_id": ObjectId("55a7e1d5daafacc0dc684f66"), "first_name": "Lacy", "middle_name": "Lori", "last_name": "McNeil", "dob": new Date('04/15/1955').getTime()/86400000, "gender": NumberInt(1), "race": NumberInt(2) },
		{ "_id": ObjectId("55a7e1eedaafacc0dc684f67"), "first_name": "Rodolphe", "middle_name": "Giustino", "last_name": "Underwood", "dob": new Date('04/15/1955').getTime()/86400000, "gender": NumberInt(2), "race": NumberInt(2) },
		{ "_id": ObjectId("55a7e230daafacc0dc684f68"), "first_name": "Karen", "middle_name": "Aniya", "last_name": "Quinn", "dob": new Date('04/15/1955').getTime()/86400000, "gender": NumberInt(1), "race": NumberInt(2) },
		{ "_id": ObjectId("55a7e240daafacc0dc684f69"), "first_name": "Jacquelyn", "middle_name": "Quirin", "last_name": "Milford", "dob": new Date('04/15/1955').getTime()/86400000, "gender": NumberInt(1), "race": NumberInt(2) },
		{ "_id": ObjectId("55a7f87adaafacc0dc684f6a"), "first_name": "Konnor", "middle_name": "Markus", "last_name": "Riese", "dob": new Date('04/15/1955').getTime()/86400000, "gender": NumberInt(2), "race": NumberInt(1) },
		{ "_id": ObjectId("55a7f887daafacc0dc684f6b"), "first_name": "Sharyn", "middle_name": "Martha", "last_name": "Appleby", "dob": new Date('04/15/1955').getTime()/86400000, "gender": NumberInt(1), "race": NumberInt(1) },
		{ "_id": ObjectId("55a7f89edaafacc0dc684f6c"), "first_name": "Detta", "middle_name": "Ronda", "last_name": "Marchetti", "dob": new Date('04/15/1955').getTime()/86400000, "gender": NumberInt(1), "race": NumberInt(1) },
		{ "_id": ObjectId("55a7f8badaafacc0dc684f6d"), "first_name": "Arlene", "middle_name": "Dell", "last_name": "Thorley", "dob": new Date('04/15/1955').getTime()/86400000, "gender": NumberInt(1), "race": NumberInt(3) },
		{ "_id": ObjectId("55a7f8c8daafacc0dc684f6e"), "first_name": "Sheila", "middle_name": "Moritz", "last_name": "Bray", "dob": new Date('04/15/1955').getTime()/86400000, "gender": NumberInt(1), "race": NumberInt(3) },
		{ "_id": ObjectId("55a7f8dcdaafacc0dc684f6f"), "first_name": "Crispin", "middle_name": "Bret", "last_name": "Summers", "dob": new Date('04/15/1955').getTime()/86400000, "gender": NumberInt(2), "race": NumberInt(2) },
		{ "_id": ObjectId("55a7f8f1daafacc0dc684f70"), "first_name": "Etta", "middle_name": "Ziska", "last_name": "Thacker", "dob": new Date('04/15/1955').getTime()/86400000, "gender": NumberInt(1), "race": NumberInt(1) },
		{ "_id": ObjectId("55a7f90cdaafacc0dc684f71"), "first_name": "Antonina", "middle_name": "Donatien", "last_name": "Walter", "dob": new Date('04/15/1955').getTime()/86400000, "gender": NumberInt(1), "race": NumberInt(1) },
		{ "_id": ObjectId("55a7f91adaafacc0dc684f72"), "first_name": "Mathew", "middle_name": "Franklin", "last_name": "Fairchild", "dob": new Date('04/15/1955').getTime()/86400000, "gender": NumberInt(2), "race": NumberInt(1) },
		{ "_id": ObjectId("55a7f92ddaafacc0dc684f73"), "first_name": "Chevonne", "middle_name": "Bertrand", "last_name": "Northrop", "dob": new Date('04/15/1955').getTime()/86400000, "gender": NumberInt(1), "race": NumberInt(1) },
		{ "_id": ObjectId("55a7f941daafacc0dc684f74"), "first_name": "Leopold", "middle_name": "Nia", "last_name": "Duff", "dob": new Date('04/15/1955').getTime()/86400000, "gender": NumberInt(2), "race": NumberInt(1) },
		{ "_id": ObjectId("507f1f77bcf86cd799439011"), "first_name": "Leopold", "middle_name": "Nia", "last_name": "Daffy", "dob": new Date('04/15/1955').getTime()/86400000, "gender": NumberInt(2), "race": NumberInt(1) }
	]
);

//Insert data into the Encounters collection.
//Encounter collection.
mydb.encounters.insert( 
	[
	    { "_id": ObjectId("55a7fab8daafacc0dc684f75"), "patient_id": ObjectId("55a7d620daafacc0dc684f45"), "date": new Date('6/29/2014').getTime(), "type": 4, reason_for_visit: "Emergency room visit for heart palpitations.", assertions:[
			{ "observable": NumberInt(565930304), "observable_type": NumberInt(2), "provenance": NumberInt(345987), "provenance_type": NumberInt(2), "value": NumberInt(110), "value_type": NumberInt(2), "issued": new Date('6/29/2014').getTime()},
			{ "observable": NumberInt(569530310), "observable_type": NumberInt(2), "provenance": NumberInt(342987), "provenance_type": NumberInt(2), "value": NumberInt(145), "value_type": NumberInt(2), "issued": new Date('6/29/2014').getTime()}
		] },
		{ "_id": ObjectId("55a7fad1daafacc0dc684f76"), "patient_id": ObjectId("55a7d620daafacc0dc684f45"), "date": new Date('6/29/2014').getTime(), "type": 4, reason_for_visit: "Emergency room visit for heart palpitations.", assertions:[
			{ "observable": NumberInt(569590304), "observable_type": NumberInt(2), "provenance": NumberInt(345987), "provenance_type": NumberInt(2), "value": NumberInt(120), "value_type": NumberInt(2), "issued": new Date('6/29/2014').getTime()},
			{ "observable": NumberInt(569593030), "observable_type": NumberInt(2), "provenance": NumberInt(342987), "provenance_type": NumberInt(2), "value": NumberInt(80), "value_type": NumberInt(2), issued: new Date('6/29/2014').getTime()},
			{ "observable": NumberInt(569930310), "observable_type": NumberInt(2), "provenance": NumberInt(345167), "provenance_type": NumberInt(2), "value": NumberInt(120), "value_type": NumberInt(2), "issued": new Date('6/29/2014').getTime()},
			{ "observable": NumberInt(569593033), "observable_type": NumberInt(2), "provenance": NumberInt(245987), "provenance_type": NumberInt(2), "value": NumberInt(80), "value_type": NumberInt(2), issued: new Date('6/29/2014').getTime()}
		] },
		{ "_id": ObjectId("55a7fae5daafacc0dc684f77"), "patient_id": ObjectId("55a7d916daafacc0dc684f46"), "date": new Date('1/17/2014').getTime(), "type": 4, reason_for_visit: "Emergency room visit for heart palpitations.", assertions:[
			{ "observable": NumberInt(569930304), "observable_type": NumberInt(2), "provenance": NumberInt(345987), "provenance_type": NumberInt(2), "value": NumberInt(165), "value_type": NumberInt(2), "issued": new Date('1/17/2014').getTime()},
			{ "observable": NumberInt(569590307), "observable_type": NumberInt(2), "provenance": NumberInt(342987), "provenance_type": NumberInt(2), "value": NumberInt(100), "value_type": NumberInt(2), "issued": new Date('1/17/2014').getTime()},
			{ "observable": NumberInt(569593010), "observable_type": NumberInt(2), "provenance": NumberInt(345167), "provenance_type": NumberInt(2), "value": NumberInt(100), "value_type": NumberInt(2), "issued": new Date('1/17/2014').getTime()},
			{ "observable": NumberInt(5695930313), "observable_type": NumberInt(2), "provenance": NumberInt(245987), "provenance_type": NumberInt(2), "value": NumberInt(50), "value_type": NumberInt(2), issued: new Date('1/17/2014').getTime()}
		] },
		{ "_id": ObjectId("55a7fb00daafacc0dc684f78"), "patient_id": ObjectId("55a7d960daafacc0dc684f47"), "date": new Date('12/2/2014').getTime(), "type": 4, reason_for_visit: "Emergency room visit for heart palpitations.", assertions:[
			{ "observable": NumberInt(569593304), "observable_type": NumberInt(2), "provenance": NumberInt(345987), "provenance_type": NumberInt(2), "value": NumberInt(165), "value_type": NumberInt(2), "issued": new Date('12/2/2014').getTime()},
			{ "observable": NumberInt(569530307), "observable_type": NumberInt(2), "provenance": NumberInt(342987), "provenance_type": NumberInt(2), "value": NumberInt(100), "value_type": NumberInt(2), "issued": new Date('12/2/2014').getTime()},
			{ "observable": NumberInt(595930310), "observable_type": NumberInt(2), "provenance": NumberInt(345167), "provenance_type": NumberInt(2), "value": NumberInt(110), "value_type": NumberInt(2), "issued": new Date('12/2/2014').getTime()},
			{ "observable": NumberInt(695930313), "observable_type": NumberInt(2), "provenance": NumberInt(245987), "provenance_type": NumberInt(2), "value": NumberInt(60), "value_type": NumberInt(2), issued: new Date('12/2/2014').getTime()}
		] },
		{ "_id": ObjectId("55a7fb10daafacc0dc684f79"), "patient_id": ObjectId("55a7d9b7daafacc0dc684f48"), "date": new Date('2/18/2014').getTime(), "type": 4, reason_for_visit: "Emergency room visit for heart palpitations.", assertions:[
			{ "observable": NumberInt(565930304), "observable_type": NumberInt(2), "provenance": NumberInt(345987), "provenance_type": NumberInt(2), "value": NumberInt(115), "value_type": NumberInt(2), "issued": new Date('2/18/2014').getTime()},
			{ "observable": NumberInt(569593007), "observable_type": NumberInt(2), "provenance": NumberInt(342987), "provenance_type": NumberInt(2), "value": NumberInt(85), "value_type": NumberInt(2), issued: new Date('2/18/2014').getTime()},
			{ "observable": NumberInt(595930310), "observable_type": NumberInt(2), "provenance": NumberInt(345167), "provenance_type": NumberInt(2), "value": NumberInt(125), "value_type": NumberInt(2), "issued": new Date('2/18/2014').getTime()},
			{ "observable": NumberInt(569590313), "observable_type": NumberInt(2), "provenance": NumberInt(245987), "provenance_type": NumberInt(2), "value": NumberInt(75), "value_type": NumberInt(2), issued: new Date('2/18/2014').getTime()}
		] },
		{ "_id": ObjectId("55a7fb27daafacc0dc684f7a"), "patient_id": ObjectId("55a7d9d0daafacc0dc684f49"), "date": new Date('3/30/2014').getTime(), "type": 4, reason_for_visit: "Emergency room visit for heart palpitations.", assertions:[
			{ "observable": NumberInt(569530304), "observable_type": NumberInt(2), "provenance": NumberInt(345987), "provenance_type": NumberInt(2), "value": NumberInt(120), "value_type": NumberInt(2), "issued": new Date('3/30/2014').getTime()},
			{ "observable": NumberInt(5695930307), "observable_type": NumberInt(2), "provenance": NumberInt(342987), "provenance_type": NumberInt(2), "value": NumberInt(80), "value_type": NumberInt(2), issued: new Date('3/30/2014').getTime()},
			{ "observable": NumberInt(695930310), "observable_type": NumberInt(2), "provenance": NumberInt(345167), "provenance_type": NumberInt(2), "value": NumberInt(120), "value_type": NumberInt(2), "issued": new Date('3/30/2014').getTime()},
			{ "observable": NumberInt(5695930313), "observable_type": NumberInt(2), "provenance": NumberInt(245987), "provenance_type": NumberInt(2), "value": NumberInt(80), "value_type": NumberInt(2), issued: new Date('3/30/2014').getTime()}
		] },
		{ "_id": ObjectId("55a7fb33daafacc0dc684f7b"), "patient_id": ObjectId("55a7da09daafacc0dc684f4a"), "date": new Date('2/5/2014').getTime(), "type": 4, reason_for_visit: "Emergency room visit for heart palpitations.", assertions:[
			{ "observable": NumberInt(569530304), "observable_type": NumberInt(2), "provenance": NumberInt(345987), "provenance_type": NumberInt(2), "value": NumberInt(145), "value_type": NumberInt(2), "issued": new Date('2/5/2014').getTime()},
			{ "observable": NumberInt(5695930307), "observable_type": NumberInt(2), "provenance": NumberInt(342987), "provenance_type": NumberInt(2), "value": NumberInt(95), "value_type": NumberInt(2), issued: new Date('2/5/2014').getTime()},
			{ "observable": NumberInt(695930310), "observable_type": NumberInt(2), "provenance": NumberInt(345167), "provenance_type": NumberInt(2), "value": NumberInt(175), "value_type": NumberInt(2), "issued": new Date('2/5/2014').getTime()},
			{ "observable": NumberInt(569930313), "observable_type": NumberInt(2), "provenance": NumberInt(245987), "provenance_type": NumberInt(2), "value": NumberInt(110), "value_type": NumberInt(2), "issued": new Date('2/5/2014').getTime()}
		] },
		{ "_id": ObjectId("55a7fb4adaafacc0dc684f7c"), "patient_id": ObjectId("55a7dbb6daafacc0dc684f4b"), "date": new Date('6/27/2014').getTime(), "type": 4, reason_for_visit: "Emergency room visit for heart palpitations.", assertions:[
			{ "observable": NumberInt(569530304), "observable_type": NumberInt(2), "provenance": NumberInt(345987), "provenance_type": NumberInt(2), "value": NumberInt(155), "value_type": NumberInt(2), "issued": new Date('6/27/2014').getTime()},
			{ "observable": NumberInt(5695930307), "observable_type": NumberInt(2), "provenance": NumberInt(342987), "provenance_type": NumberInt(2), "value": NumberInt(95), "value_type": NumberInt(2), issued: new Date('6/27/2014').getTime()},
			{ "observable": NumberInt(695930310), "observable_type": NumberInt(2), "provenance": NumberInt(3459167), "provenance_type": NumberInt(2), "value": NumberInt(160), "value_type": NumberInt(2), "issued": new Date('6/27/2014').getTime()},
			{ "observable": NumberInt(569930313), "observable_type": NumberInt(2), "provenance": NumberInt(245987), "provenance_type": NumberInt(2), "value": NumberInt(100), "value_type": NumberInt(2), "issued": new Date('6/27/2014').getTime()}
		] },
		{ "_id": ObjectId("55a7fb67daafacc0dc684f7d"), "patient_id": ObjectId("55a7dbcfdaafacc0dc684f4c"), "date": new Date('1/8/2014').getTime(), "type": 4, reason_for_visit: "Emergency room visit for heart palpitations.", assertions:[
			{ "observable": NumberInt(569530304), "observable_type": NumberInt(2), "provenance": NumberInt(345987), "provenance_type": NumberInt(2), "value": NumberInt(110), "value_type": NumberInt(2), "issued": new Date('1/8/2014').getTime()},
			{ "observable": NumberInt(5695930307), "observable_type": NumberInt(2), "provenance": NumberInt(342987), "provenance_type": NumberInt(2), "value": NumberInt(70), "value_type": NumberInt(2), issued: new Date('1/8/2014').getTime()},
			{ "observable": NumberInt(695930310), "observable_type": NumberInt(2), "provenance": NumberInt(345167), "provenance_type": NumberInt(2), "value": NumberInt(105), "value_type": NumberInt(2), "issued": new Date('1/8/2014').getTime()},
			{ "observable": NumberInt(5695930313), "observable_type": NumberInt(2), "provenance": NumberInt(245987), "provenance_type": NumberInt(2), "value": NumberInt(65), "value_type": NumberInt(2), issued: new Date('1/8/2014').getTime()}
		] },
		{ "_id": ObjectId("55a7fb77daafacc0dc684f7e"), "patient_id": ObjectId("55a7dbf4daafacc0dc684f4d"), "date": new Date('3/31/2014').getTime(), "type": 4, reason_for_visit: "Annual physical.", assertions:[
			{ "observable": NumberInt(569530304), "observable_type": NumberInt(2), "provenance": NumberInt(345987), "provenance_type": NumberInt(2), "value": NumberInt(120), "value_type": NumberInt(2), "issued": new Date('3/31/2014').getTime()},
			{ "observable": NumberInt(5695930307), "observable_type": NumberInt(2), "provenance": NumberInt(342987), "provenance_type": NumberInt(2), "value": NumberInt(80), "value_type": NumberInt(2), issued: new Date('3/31/2014').getTime()}
		] },
		{ "_id": ObjectId("55a7fb87daafacc0dc684f7f"), "patient_id": ObjectId("55a7dc06daafacc0dc684f4e"), "date": new Date('5/6/2014').getTime(), "type": 4, reason_for_visit: "Annual physical.", assertions:[
			{ "observable": NumberInt(695930310), "observable_type": NumberInt(2), "provenance": NumberInt(345987), "provenance_type": NumberInt(2), "value": NumberInt(120), "value_type": NumberInt(2), "issued": new Date('5/6/2014').getTime()},
			{ "observable": NumberInt(5695930313), "observable_type": NumberInt(2), "provenance": NumberInt(342987), "provenance_type": NumberInt(2), "value": NumberInt(80), "value_type": NumberInt(2), issued: new Date('5/6/2014').getTime()}
		] },
		{ "_id": ObjectId("55a7fb96daafacc0dc684f80"), "patient_id": ObjectId("55a7dc1cdaafacc0dc684f4f"), "date": new Date('1/12/2014').getTime(), "type": 4, reason_for_visit: "Annual physical.", assertions:[
			{ "observable": NumberInt(569530304), "observable_type": NumberInt(2), "provenance": NumberInt(345987), "provenance_type": NumberInt(2), "value": NumberInt(120), "value_type": NumberInt(2), "issued": new Date('1/12/2014').getTime()},
			{ "observable": NumberInt(5695930307), "observable_type": NumberInt(2), "provenance": NumberInt(342987), "provenance_type": NumberInt(2), "value": NumberInt(80), "value_type": NumberInt(2), issued: new Date('1/12/2014').getTime()}
		] },
		{ "_id": ObjectId("55a7fba9daafacc0dc684f81"), "patient_id": ObjectId("55a7dc2ddaafacc0dc684f50"), "date": new Date('12/1/2014').getTime(), "type": 4, reason_for_visit: "Annual physical.", assertions:[
			{ "observable": NumberInt(695930310), "observable_type": NumberInt(2), "provenance": NumberInt(345987), "provenance_type": NumberInt(2), "value": NumberInt(120), "value_type": NumberInt(2), "issued": new Date('12/1/2014').getTime()},
			{ "observable": NumberInt(5695930313), "observable_type": NumberInt(2), "provenance": NumberInt(342987), "provenance_type": NumberInt(2), "value": NumberInt(80), "value_type": NumberInt(2), issued: new Date('12/1/2014').getTime()}
		] },
		{ "_id": ObjectId("55a7fbbfdaafacc0dc684f82"), "patient_id": ObjectId("55a7dc4adaafacc0dc684f51"), "date": new Date('11/25/2014').getTime(), "type": 4, reason_for_visit: "Annual physical.", assertions:[
			{ "observable": NumberInt(569530304), "observable_type": NumberInt(2), "provenance": NumberInt(345987), "provenance_type": NumberInt(2), "value": NumberInt(120), "value_type": NumberInt(2), "issued": new Date('11/25/2014').getTime()},
			{ "observable": NumberInt(5695930307), "observable_type": NumberInt(2), "provenance": NumberInt(342987), "provenance_type": NumberInt(2), "value": NumberInt(80), "value_type": NumberInt(2), issued: new Date('11/25/2014').getTime()}
		] },
		{ "_id": ObjectId("55a7fbd2daafacc0dc684f83"), "patient_id": ObjectId("55a7dc61daafacc0dc684f52"), "date": new Date('1/16/2014').getTime(), "type": 4, reason_for_visit: "Annual physical.", assertions:[
			{ "observable": NumberInt(695930310), "observable_type": NumberInt(2), "provenance": NumberInt(345987), "provenance_type": NumberInt(2), "value": NumberInt(120), "value_type": NumberInt(2), "issued": new Date('1/16/2014').getTime()},
			{ "observable": NumberInt(5695930313), "observable_type": NumberInt(2), "provenance": NumberInt(342987), "provenance_type": NumberInt(2), "value": NumberInt(80), "value_type": NumberInt(2), issued: new Date('1/16/2014').getTime()}
		] },
		{ "_id": ObjectId("55a7fbe4daafacc0dc684f84"), "patient_id": ObjectId("55a7dc7fdaafacc0dc684f53"), "date": new Date('4/16/2014').getTime(), "type": 4, reason_for_visit: "Annual physical.", assertions:[
			{ "observable": NumberInt(569530304), "observable_type": NumberInt(2), "provenance": NumberInt(345987), "provenance_type": NumberInt(2), "value": NumberInt(120), "value_type": NumberInt(2), "issued": new Date('4/16/2014').getTime()},
			{ "observable": NumberInt(5695930307), "observable_type": NumberInt(2), "provenance": NumberInt(342987), "provenance_type": NumberInt(2), "value": NumberInt(80), "value_type": NumberInt(2), issued: new Date('4/16/2014').getTime()}
		] },
		{ "_id": ObjectId("55a7fbf3daafacc0dc684f85"), "patient_id": ObjectId("55a7dc90daafacc0dc684f54"), "date": new Date('2/19/2014').getTime(), "type": 4, reason_for_visit: "Annual physical.", assertions:[
			{ "observable": NumberInt(695930310), "observable_type": NumberInt(2), "provenance": NumberInt(345987), "provenance_type": NumberInt(2), "value": NumberInt(120), "value_type": NumberInt(2), "issued": new Date('2/19/2014').getTime()},
			{ "observable": NumberInt(5695930313), "observable_type": NumberInt(2), "provenance": NumberInt(342987), "provenance_type": NumberInt(2), "value": NumberInt(80), "value_type": NumberInt(2), issued: new Date('2/19/2014').getTime()}
		] },
		{ "_id": ObjectId("55a7fc03daafacc0dc684f86"), "patient_id": ObjectId("55a7dca7daafacc0dc684f55"), "date": new Date('1/30/2014').getTime(), "type": 4, reason_for_visit: "Emergency room visit for headaches/light-headedness.", assertions:[
			{ "observable": NumberInt(569530304), "observable_type": NumberInt(2), "provenance": NumberInt(345987), "provenance_type": NumberInt(2), "value": NumberInt(120), "value_type": NumberInt(2), "issued": new Date('1/30/2014').getTime()},
			{ "observable": NumberInt(5695930307), "observable_type": NumberInt(2), "provenance": NumberInt(342987), "provenance_type": NumberInt(2), "value": NumberInt(80), "value_type": NumberInt(2), issued: new Date('1/30/2014').getTime()},
			{ "observable": NumberInt(695930310), "observable_type": NumberInt(2), "provenance": NumberInt(345167), "provenance_type": NumberInt(2), "value": NumberInt(120), "value_type": NumberInt(2), "issued": new Date('1/15/2014').getTime()},
			{ "observable": NumberInt(5695930313), "observable_type": NumberInt(2), "provenance": NumberInt(245987), "provenance_type": NumberInt(2), "value": NumberInt(80), "value_type": NumberInt(2), issued: new Date('1/15/2014').getTime()}
		] },
		{ "_id": ObjectId("55a7fc39daafacc0dc684f87"), "patient_id": ObjectId("55a7dcb9daafacc0dc684f56"), "date": new Date('2/6/2014').getTime(), "type": 4, reason_for_visit: "Emergency room visit for headaches/light-headedness.", assertions:[
			{ "observable": NumberInt(569530304), "observable_type": NumberInt(2), "provenance": NumberInt(345987), "provenance_type": NumberInt(2), "value": NumberInt(165), "value_type": NumberInt(2), "issued": new Date('2/6/2014').getTime()},
			{ "observable": NumberInt(56950307), "observable_type": NumberInt(2), "provenance": NumberInt(342987), "provenance_type": NumberInt(2), "value": NumberInt(100), "value_type": NumberInt(2), "issued": new Date('2/6/2014').getTime()},
			{ "observable": NumberInt(569530304), "observable_type": NumberInt(2), "provenance": NumberInt(345167), "provenance_type": NumberInt(2), "value": NumberInt(130), "value_type": NumberInt(2), "issued": new Date('1/23/2014').getTime()},
			{ "observable": NumberInt(5695930307), "observable_type": NumberInt(2), "provenance": NumberInt(245987), "provenance_type": NumberInt(2), "value": NumberInt(95), "value_type": NumberInt(2), issued: new Date('1/23/2014').getTime()}
		] },
		{ "_id": ObjectId("55a7fc45daafacc0dc684f88"), "patient_id": ObjectId("55a7dcd5daafacc0dc684f57"), "date": new Date('12/8/2014').getTime(), "type": 4, reason_for_visit: "Emergency room visit for headaches/light-headedness.", assertions:[
			{ "observable": NumberInt(695930310), "observable_type": NumberInt(2), "provenance": NumberInt(345987), "provenance_type": NumberInt(2), "value": NumberInt(170), "value_type": NumberInt(2), "issued": new Date('12/8/2014').getTime()},
			{ "observable": NumberInt(569930313), "observable_type": NumberInt(2), "provenance": NumberInt(342987), "provenance_type": NumberInt(2), "value": NumberInt(120), "value_type": NumberInt(2), "issued": new Date('12/8/2014').getTime()},
			{ "observable": NumberInt(695930310), "observable_type": NumberInt(2), "provenance": NumberInt(345167), "provenance_type": NumberInt(2), "value": NumberInt(170), "value_type": NumberInt(2), "issued": new Date('1/28/2014').getTime()},
			{ "observable": NumberInt(569930313), "observable_type": NumberInt(2), "provenance": NumberInt(245987), "provenance_type": NumberInt(2), "value": NumberInt(120), "value_type": NumberInt(2), "issued": new Date('1/28/2014').getTime()}
		] },
		{ "_id": ObjectId("55a7fc57daafacc0dc684f89"), "patient_id": ObjectId("55a7dcf0daafacc0dc684f58"), "date": new Date('5/30/2014').getTime(), "type": 4, reason_for_visit: "Emergency room visit for headaches/light-headedness.", assertions:[
			{ "observable": NumberInt(5695930304), "observable_type": NumberInt(2), "provenance": NumberInt(345987), "provenance_type": NumberInt(2), "value": NumberInt(90), "value_type": NumberInt(2), issued: new Date('5/30/2014').getTime()},
			{ "observable": NumberInt(5695930307), "observable_type": NumberInt(2), "provenance": NumberInt(342987), "provenance_type": NumberInt(2), "value": NumberInt(60), "value_type": NumberInt(2), issued: new Date('5/30/2014').getTime()},
			{ "observable": NumberInt(695930310), "observable_type": NumberInt(2), "provenance": NumberInt(345167), "provenance_type": NumberInt(2), "value": NumberInt(100), "value_type": NumberInt(2), "issued": new Date('3/30/2014').getTime()},
			{ "observable": NumberInt(5695930313), "observable_type": NumberInt(2), "provenance": NumberInt(245987), "provenance_type": NumberInt(2), "value": NumberInt(70), "value_type": NumberInt(2), issued: new Date('3/30/2014').getTime()}
		] },
		{ "_id": ObjectId("55a7fc67daafacc0dc684f8a"), "patient_id": ObjectId("55a7dd3cdaafacc0dc684f59"), "date": new Date('4/22/2014').getTime(), "type": 4, reason_for_visit: "Emergency room visit for headaches/light-headedness.", assertions:[
			{ "observable": NumberInt(569530304), "observable_type": NumberInt(2), "provenance": NumberInt(345987), "provenance_type": NumberInt(2), "value": NumberInt(120), "value_type": NumberInt(2), "issued": new Date('4/22/2014').getTime()},
			{ "observable": NumberInt(5695930307), "observable_type": NumberInt(2), "provenance": NumberInt(342987), "provenance_type": NumberInt(2), "value": NumberInt(80), "value_type": NumberInt(2), issued: new Date('4/22/2014').getTime()},
			{ "observable": NumberInt(569530304), "observable_type": NumberInt(2), "provenance": NumberInt(345167), "provenance_type": NumberInt(2), "value": NumberInt(120), "value_type": NumberInt(2), "issued": new Date('4/22/2014').getTime()},
			{ "observable": NumberInt(5695930307), "observable_type": NumberInt(2), "provenance": NumberInt(245987), "provenance_type": NumberInt(2), "value": NumberInt(80), "value_type": NumberInt(2), issued: new Date('4/22/2014').getTime()}
		] },
		{ "_id": ObjectId("55a7fc7cdaafacc0dc684f8b"), "patient_id": ObjectId("55a7dd53daafacc0dc684f5a"), "date": new Date('12/3/2014').getTime(), "type": 4, reason_for_visit: "Emergency room visit for headaches/light-headedness.", assertions:[
			{ "observable": NumberInt(56950307), "observable_type": NumberInt(2), "provenance": NumberInt(345987), "provenance_type": NumberInt(2), "value": NumberInt(125), "value_type": NumberInt(2), "issued": new Date('12/3/2014').getTime()},
			{ "observable": NumberInt(5695930313), "observable_type": NumberInt(2), "provenance": NumberInt(342987), "provenance_type": NumberInt(2), "value": NumberInt(85), "value_type": NumberInt(2), issued: new Date('12/3/2014').getTime()},
			{ "observable": NumberInt(56950307), "observable_type": NumberInt(2), "provenance": NumberInt(345167), "provenance_type": NumberInt(2), "value": NumberInt(125), "value_type": NumberInt(2), "issued": new Date('12/3/2014').getTime()},
			{ "observable": NumberInt(5695930313), "observable_type": NumberInt(2), "provenance": NumberInt(245987), "provenance_type": NumberInt(2), "value": NumberInt(85), "value_type": NumberInt(2), issued: new Date('12/3/2014').getTime()}
		] },
		{ "_id": ObjectId("55a7fc8fdaafacc0dc684f8c"), "patient_id": ObjectId("55a7de82daafacc0dc684f5b"), "date": new Date('6/26/2014').getTime(), "type": 4, reason_for_visit: "Emergency room visit for headaches/light-headedness.", assertions:[
			{ "observable": NumberInt(569530304), "observable_type": NumberInt(2), "provenance": NumberInt(345987), "provenance_type": NumberInt(2), "value": NumberInt(115), "value_type": NumberInt(2), "issued": new Date('6/26/2014').getTime()},
			{ "observable": NumberInt(5695930307), "observable_type": NumberInt(2), "provenance": NumberInt(342987), "provenance_type": NumberInt(2), "value": NumberInt(75), "value_type": NumberInt(2), issued: new Date('6/26/2014').getTime()},
			{ "observable": NumberInt(695930310), "observable_type": NumberInt(2), "provenance": NumberInt(345167), "provenance_type": NumberInt(2), "value": NumberInt(115), "value_type": NumberInt(2), "issued": new Date('4/26/2014').getTime()},
			{ "observable": NumberInt(5695930313), "observable_type": NumberInt(2), "provenance": NumberInt(145987), "provenance_type": NumberInt(2), "value": NumberInt(75), "value_type": NumberInt(2), issued: new Date('4/26/2014').getTime()}
		] },
		{ "_id": ObjectId("55a800ccdaafacc0dc684f8d"), "patient_id": ObjectId("55a7de94daafacc0dc684f5c"), "date": new Date('10/18/2014').getTime(), "type": 4, reason_for_visit: "Emergency room visit for headaches/light-headedness.", assertions:[
			{ "observable": NumberInt(569530304), "observable_type": NumberInt(2), "provenance": NumberInt(345987), "provenance_type": NumberInt(2), "value": NumberInt(120), "value_type": NumberInt(2), "issued": new Date('10/18/2014').getTime()},
			{ "observable": NumberInt(5695930307), "observable_type": NumberInt(2), "provenance": NumberInt(342987), "provenance_type": NumberInt(2), "value": NumberInt(80), "value_type": NumberInt(2), issued: new Date('10/18/2014').getTime()},
			{ "observable": NumberInt(695930310), "observable_type": NumberInt(2), "provenance": NumberInt(345167), "provenance_type": NumberInt(2), "value": NumberInt(120), "value_type": NumberInt(2), "issued": new Date('10/18/2014').getTime()},
			{ "observable": NumberInt(5695930313), "observable_type": NumberInt(2), "provenance": NumberInt(245987), "provenance_type": NumberInt(2), "value": NumberInt(80), "value_type": NumberInt(2), issued: new Date('10/18/2014').getTime()}
		] },
		{ "_id": ObjectId("55a800e1daafacc0dc684f8e"), "patient_id": ObjectId("55a7deb9daafacc0dc684f5d"), "date": new Date('6/4/2014').getTime(), "type": 4, reason_for_visit: "Follow-up visit with specialist.", assertions:[
			{ "observable": NumberInt(569530304), "observable_type": NumberInt(2), "provenance": NumberInt(345987), "provenance_type": NumberInt(2), "value": NumberInt(135), "value_type": NumberInt(2), "issued": new Date('6/4/2014').getTime()},
			{ "observable": NumberInt(5695930307), "observable_type": NumberInt(2), "provenance": NumberInt(342987), "provenance_type": NumberInt(2), "value": NumberInt(93), "value_type": NumberInt(2), issued: new Date('6/4/2014').getTime()}
		] },
		{ "_id": ObjectId("55a80127daafacc0dc684f8f"), "patient_id": ObjectId("55a7decfdaafacc0dc684f5e"), "date": new Date('6/24/2014').getTime(), "type": 4, reason_for_visit: "Follow-up visit with specialist.", assertions:[
			{ "observable": NumberInt(695930310), "observable_type": NumberInt(2), "provenance": NumberInt(345987), "provenance_type": NumberInt(2), "value": NumberInt(123), "value_type": NumberInt(2), "issued": new Date('6/24/2014').getTime()},
			{ "observable": NumberInt(5695930313), "observable_type": NumberInt(2), "provenance": NumberInt(342987), "provenance_type": NumberInt(2), "value": NumberInt(82), "value_type": NumberInt(2), issued: new Date('6/24/2014').getTime()}
		] },
		{ "_id": ObjectId("55a8013bdaafacc0dc684f90"), "patient_id": ObjectId("55a7dee2daafacc0dc684f5f"), "date": new Date('6/10/2014').getTime(), "type": 4, reason_for_visit: "Follow-up visit with specialist.", assertions:[
			{ "observable": NumberInt(569530304), "observable_type": NumberInt(2), "provenance": NumberInt(345987), "provenance_type": NumberInt(2), "value": NumberInt(124), "value_type": NumberInt(2), "issued": new Date('6/10/2014').getTime()},
			{ "observable": NumberInt(5695930307), "observable_type": NumberInt(2), "provenance": NumberInt(342987), "provenance_type": NumberInt(2), "value": NumberInt(76), "value_type": NumberInt(2), issued: new Date('6/10/2014').getTime()}
		] },
		{ "_id": ObjectId("55a8014edaafacc0dc684f91"), "patient_id": ObjectId("55a7def8daafacc0dc684f60"), "date": new Date('3/12/2014').getTime(), "type": 4, reason_for_visit: "Follow-up visit with specialist.", assertions:[
			{ "observable": NumberInt(569530304), "observable_type": NumberInt(2), "provenance": NumberInt(345987), "provenance_type": NumberInt(2), "value": NumberInt(138), "value_type": NumberInt(2), "issued": new Date('3/12/2014').getTime()},
			{ "observable": NumberInt(5695930307), "observable_type": NumberInt(2), "provenance": NumberInt(342987), "provenance_type": NumberInt(2), "value": NumberInt(94), "value_type": NumberInt(2), issued: new Date('3/12/2014').getTime()}
		] },
		{ "_id": ObjectId("55a8026edaafacc0dc684f92"), "patient_id": ObjectId("55a7df0ddaafacc0dc684f61"), "date": new Date('12/8/2014').getTime(), "type": 4, reason_for_visit: "Follow-up visit with specialist.", assertions:[
			{ "observable": NumberInt(569530304), "observable_type": NumberInt(2), "provenance": NumberInt(345987), "provenance_type": NumberInt(2), "value": NumberInt(118), "value_type": NumberInt(2), "issued": new Date('12/8/2014').getTime()},
			{ "observable": NumberInt(5695930307), "observable_type": NumberInt(2), "provenance": NumberInt(342987), "provenance_type": NumberInt(2), "value": NumberInt(75), "value_type": NumberInt(2), issued: new Date('12/8/2014').getTime()}
		] },
		{ "_id": ObjectId("55a8027cdaafacc0dc684f93"), "patient_id": ObjectId("55a7df2bdaafacc0dc684f62"), "date": new Date('1/29/2014').getTime(), "type": 4, reason_for_visit: "Follow-up visit with specialist.", assertions:[
			{ "observable": NumberInt(569530304), "observable_type": NumberInt(2), "provenance": NumberInt(345987), "provenance_type": NumberInt(2), "value": NumberInt(115), "value_type": NumberInt(2), "issued": new Date('1/29/2014').getTime()},
			{ "observable": NumberInt(5695930307), "observable_type": NumberInt(2), "provenance": NumberInt(342987), "provenance_type": NumberInt(2), "value": NumberInt(77), "value_type": NumberInt(2), issued: new Date('1/29/2014').getTime()}
		] },
		{ "_id": ObjectId("55a80290daafacc0dc684f94"), "patient_id": ObjectId("55a7df3fdaafacc0dc684f63"), "date": new Date('1/6/2014').getTime(), "type": 4, reason_for_visit: "Follow-up visit with specialist.", assertions:[
			{ "observable": NumberInt(569530304), "observable_type": NumberInt(2), "provenance": NumberInt(345987), "provenance_type": NumberInt(2), "value": NumberInt(125), "value_type": NumberInt(2), "issued": new Date('1/6/2014').getTime()},
			{ "observable": NumberInt(5695930307), "observable_type": NumberInt(2), "provenance": NumberInt(342987), "provenance_type": NumberInt(2), "value": NumberInt(76), "value_type": NumberInt(2), issued: new Date('1/6/2014').getTime()}
		] },
		{ "_id": ObjectId("55a8029edaafacc0dc684f95"), "patient_id": ObjectId("55a7df59daafacc0dc684f64"), "date": new Date('12/8/2014').getTime(), "type": 4, reason_for_visit: "Follow-up visit with specialist.", assertions:[
			{ "observable": NumberInt(569530304), "observable_type": NumberInt(2), "provenance": NumberInt(345987), "provenance_type": NumberInt(2), "value": NumberInt(120), "value_type": NumberInt(2), "issued": new Date('12/8/2014').getTime()},
			{ "observable": NumberInt(5695930307), "observable_type": NumberInt(2), "provenance": NumberInt(342987), "provenance_type": NumberInt(2), "value": NumberInt(80), "value_type": NumberInt(2), issued: new Date('12/8/2014').getTime()}
		] },
		{ "_id": ObjectId("55a802b1daafacc0dc684f96"), "patient_id": ObjectId("55a7e1badaafacc0dc684f65"), "date": new Date('6/30/2014').getTime(), "type": 4, reason_for_visit: "Pre-procedural reading.", assertions:[
			{ "observable": NumberInt(569530304), "observable_type": NumberInt(2), "provenance": NumberInt(345987), "provenance_type": NumberInt(2), "value": NumberInt(115), "value_type": NumberInt(2), "issued": new Date('6/30/2014').getTime()},
			{ "observable": NumberInt(5695930307), "observable_type": NumberInt(2), "provenance": NumberInt(342987), "provenance_type": NumberInt(2), "value": NumberInt(87), "value_type": NumberInt(2), issued: new Date('6/30/2014').getTime()}
		] },
		{ "_id": ObjectId("55a802c1daafacc0dc684f97"), "patient_id": ObjectId("55a7e1d5daafacc0dc684f66"), "date": new Date('5/20/2014').getTime(), "type": 4, reason_for_visit: "Pre-procedural reading.", assertions:[
			{ "observable": NumberInt(569530304), "observable_type": NumberInt(2), "provenance": NumberInt(345987), "provenance_type": NumberInt(2), "value": NumberInt(129), "value_type": NumberInt(2), "issued": new Date('5/20/2014').getTime()},
			{ "observable": NumberInt(5695930307), "observable_type": NumberInt(2), "provenance": NumberInt(342987), "provenance_type": NumberInt(2), "value": NumberInt(72), "value_type": NumberInt(2), issued: new Date('5/20/2014').getTime()}
		] },
		{ "_id": ObjectId("55a802d3daafacc0dc684f98"), "patient_id": ObjectId("55a7e1eedaafacc0dc684f67"), "date": new Date('11/26/2014').getTime(), "type": 4, reason_for_visit: "Pre-procedural reading.", assertions:[
			{ "observable": NumberInt(569530304), "observable_type": NumberInt(2), "provenance": NumberInt(345987), "provenance_type": NumberInt(2), "value": NumberInt(129), "value_type": NumberInt(2), "issued": new Date('11/26/2014').getTime()},
			{ "observable": NumberInt(5695930307), "observable_type": NumberInt(2), "provenance": NumberInt(342987), "provenance_type": NumberInt(2), "value": NumberInt(89), "value_type": NumberInt(2), issued: new Date('11/26/2014').getTime()}
		] },
		{ "_id": ObjectId("55a802e4daafacc0dc684f99"), "patient_id": ObjectId("55a7e230daafacc0dc684f68"), "date": new Date('8/26/2014').getTime(), "type": 4, reason_for_visit: "Pre-procedural reading.", assertions:[
			{ "observable": NumberInt(569530304), "observable_type": NumberInt(2), "provenance": NumberInt(345987), "provenance_type": NumberInt(2), "value": NumberInt(135), "value_type": NumberInt(2), "issued": new Date('8/26/2014').getTime()},
			{ "observable": NumberInt(5695930307), "observable_type": NumberInt(2), "provenance": NumberInt(342987), "provenance_type": NumberInt(2), "value": NumberInt(93), "value_type": NumberInt(2), issued: new Date('8/26/2014').getTime()}
		] },
		{ "_id": ObjectId("55a802f0daafacc0dc684f9a"), "patient_id": ObjectId("55a7e240daafacc0dc684f69"), "date": new Date('12/8/2014').getTime(), "type": 4, reason_for_visit: "Pre-procedural reading.", assertions:[
			{ "observable": NumberInt(569530304), "observable_type": NumberInt(2), "provenance": NumberInt(345987), "provenance_type": NumberInt(2), "value": NumberInt(145), "value_type": NumberInt(2), "issued": new Date('12/8/2014').getTime()},
			{ "observable": NumberInt(5695930307), "observable_type": NumberInt(2), "provenance": NumberInt(342987), "provenance_type": NumberInt(2), "value": NumberInt(98), "value_type": NumberInt(2), issued: new Date('12/8/2014').getTime()}
		] },
		{ "_id": ObjectId("55a80308daafacc0dc684f9b"), "patient_id": ObjectId("55a7f87adaafacc0dc684f6a"), "date": new Date('11/5/2014').getTime(), "type": 4, reason_for_visit: "Pre-procedural reading.", assertions:[
			{ "observable": NumberInt(695930310), "observable_type": NumberInt(2), "provenance": NumberInt(345987), "provenance_type": NumberInt(2), "value": NumberInt(111), "value_type": NumberInt(2), "issued": new Date('11/5/2014').getTime()},
			{ "observable": NumberInt(5695930313), "observable_type": NumberInt(2), "provenance": NumberInt(342987), "provenance_type": NumberInt(2), "value": NumberInt(71), "value_type": NumberInt(2), issued: new Date('11/5/2014').getTime()}
		] },
		{ "_id": ObjectId("55a804e8daafacc0dc684f9c"), "patient_id": ObjectId("55a7f887daafacc0dc684f6b"), "date": new Date('1/4/2014').getTime(), "type": 4, reason_for_visit: "Pre-procedural reading.", assertions:[
			{ "observable": NumberInt(569530304), "observable_type": NumberInt(2), "provenance": NumberInt(345987), "provenance_type": NumberInt(2), "value": NumberInt(120), "value_type": NumberInt(2), "issued": new Date('1/4/2014').getTime()},
			{ "observable": NumberInt(5695930307), "observable_type": NumberInt(2), "provenance": NumberInt(342987), "provenance_type": NumberInt(2), "value": NumberInt(80), "value_type": NumberInt(2), issued: new Date('1/4/2014').getTime()}
		] },
		{ "_id": ObjectId("55a804f9daafacc0dc684f9d"), "patient_id": ObjectId("55a7f89edaafacc0dc684f6c"), "date": new Date('10/31/2014').getTime(), "type": 4, reason_for_visit: "Pre-procedural reading.", assertions:[
			{ "observable": NumberInt(569530304), "observable_type": NumberInt(2), "provenance": NumberInt(345987), "provenance_type": NumberInt(2), "value": NumberInt(129), "value_type": NumberInt(2), "issued": new Date('10/31/2014').getTime()},
			{ "observable": NumberInt(5695930307), "observable_type": NumberInt(2), "provenance": NumberInt(342987), "provenance_type": NumberInt(2), "value": NumberInt(83), "value_type": NumberInt(2), issued: new Date('10/31/2014').getTime()}
		] },
		{ "_id": ObjectId("55a8050cdaafacc0dc684f9e"), "patient_id": ObjectId("55a7f8badaafacc0dc684f6d"), "date": new Date('6/10/2014').getTime(), "type": 4, reason_for_visit: "Annual physical.", assertions:[
			{ "observable": NumberInt(569530304), "observable_type": NumberInt(2), "provenance": NumberInt(345987), "provenance_type": NumberInt(2), "value": NumberInt(120), "value_type": NumberInt(2), "issued": new Date('6/10/2014').getTime()},
			{ "observable": NumberInt(5695930307), "observable_type": NumberInt(2), "provenance": NumberInt(342987), "provenance_type": NumberInt(2), "value": NumberInt(80), "value_type": NumberInt(2), issued: new Date('6/10/2014').getTime()}
		] },
		{ "_id": ObjectId("55a8051fdaafacc0dc684f9f"), "patient_id": ObjectId("55a7f8c8daafacc0dc684f6e"), "date": new Date('1/8/2014').getTime(), "type": 4, reason_for_visit: "Annual physical.", assertions:[
			{ "observable": NumberInt(569530304), "observable_type": NumberInt(2), "provenance": NumberInt(345987), "provenance_type": NumberInt(2), "value": NumberInt(118), "value_type": NumberInt(2), "issued": new Date('1/8/2014').getTime()},
			{ "observable": NumberInt(5695930307), "observable_type": NumberInt(2), "provenance": NumberInt(342987), "provenance_type": NumberInt(2), "value": NumberInt(77), "value_type": NumberInt(2), issued: new Date('1/8/2014').getTime()}
		] },
		{ "_id": ObjectId("55a8052fdaafacc0dc684fa0"), "patient_id": ObjectId("55a7f8dcdaafacc0dc684f6f"), "date": new Date('7/3/2014').getTime(), "type": 4, reason_for_visit: "Annual physical.", assertions:[
			{ "observable": NumberInt(5695930304), "observable_type": NumberInt(2), "provenance": NumberInt(345987), "provenance_type": NumberInt(2), "value": NumberInt(119), "value_type": NumberInt(2), issued: new Date('7/3/2014').getTime()},
			{ "observable": NumberInt(5695930307), "observable_type": NumberInt(2), "provenance": NumberInt(342987), "provenance_type": NumberInt(2), "value": NumberInt(74), "value_type": NumberInt(2), issued: new Date('7/3/2014').getTime()}
		] },
		{ "_id": ObjectId("55a80544daafacc0dc684fa1"), "patient_id": ObjectId("55a7f8f1daafacc0dc684f70"), "date": new Date('5/20/2014').getTime(), "type": 4, reason_for_visit: "Annual physical.", assertions:[
			{ "observable": NumberInt(569530304), "observable_type": NumberInt(2), "provenance": NumberInt(345987), "provenance_type": NumberInt(2), "value": NumberInt(112), "value_type": NumberInt(2), "issued": new Date('5/20/2014').getTime()},
			{ "observable": NumberInt(5695930307), "observable_type": NumberInt(2), "provenance": NumberInt(342987), "provenance_type": NumberInt(2), "value": NumberInt(73), "value_type": NumberInt(2), issued: new Date('5/20/2014').getTime()}
		] },
		{ "_id": ObjectId("55a80551daafacc0dc684fa2"), "patient_id": ObjectId("55a7f90cdaafacc0dc684f71"), "date": new Date('12/8/2014').getTime(), "type": 4, reason_for_visit: "Annual physical.", assertions:[
			{ "observable": NumberInt(569530304), "observable_type": NumberInt(2), "provenance": NumberInt(345987), "provenance_type": NumberInt(2), "value": NumberInt(124), "value_type": NumberInt(2), "issued": new Date('12/8/2014').getTime()},
			{ "observable": NumberInt(5695930307), "observable_type": NumberInt(2), "provenance": NumberInt(342987), "provenance_type": NumberInt(2), "value": NumberInt(83), "value_type": NumberInt(2), issued: new Date('12/8/2014').getTime()}
		] },
		{ "_id": ObjectId("55a8055fdaafacc0dc684fa3"), "patient_id": ObjectId("55a7f91adaafacc0dc684f72"), "date": new Date('5/28/2014').getTime(), "type": 4, reason_for_visit: "Annual physical.", assertions:[
			{ "observable": NumberInt(569530304), "observable_type": NumberInt(2), "provenance": NumberInt(345987), "provenance_type": NumberInt(2), "value": NumberInt(122), "value_type": NumberInt(2), "issued": new Date('5/28/2014').getTime()},
			{ "observable": NumberInt(5695930307), "observable_type": NumberInt(2), "provenance": NumberInt(342987), "provenance_type": NumberInt(2), "value": NumberInt(82), "value_type": NumberInt(2), issued: new Date('5/28/2014').getTime()}
		] },
		{ "_id": ObjectId("55a8056edaafacc0dc684fa4"), "patient_id": ObjectId("55a7f92ddaafacc0dc684f73"), "date": new Date('4/21/2014').getTime(), "type": 4, reason_for_visit: "Annual physical.", assertions:[
			{ "observable": NumberInt(569530304), "observable_type": NumberInt(2), "provenance": NumberInt(345987), "provenance_type": NumberInt(2), "value": NumberInt(115), "value_type": NumberInt(2), "issued": new Date('4/21/2014').getTime()},
			{ "observable": NumberInt(5695930307), "observable_type": NumberInt(2), "provenance": NumberInt(342987), "provenance_type": NumberInt(2), "value": NumberInt(73), "value_type": NumberInt(2), issued: new Date('4/21/2014').getTime()}
		] },
		{ "_id": ObjectId("55a8057ddaafacc0dc684fa5"), "patient_id": ObjectId("55a7f941daafacc0dc684f74"), "date": new Date('6/15/2014').getTime(), "type": 4, reason_for_visit: "Annual physical.", assertions:[
			{ "observable": NumberInt(569530304), "observable_type": NumberInt(2), "provenance": NumberInt(345987), "provenance_type": NumberInt(2), "value": NumberInt(120), "value_type": NumberInt(2), "issued": new Date('6/15/2014').getTime()},
			{ "observable": NumberInt(5695930307), "observable_type": NumberInt(2), "provenance": NumberInt(342987), "provenance_type": NumberInt(2), "value": NumberInt(80), "value_type": NumberInt(2), issued: new Date('6/15/2014').getTime()}
		] },
		{ "_id": ObjectId("507f191e810c19729de860ea"), "patient_id": ObjectId("507f1f77bcf86cd799439011"), "date": new Date('6/15/2014').getTime(), "type": 4, reason_for_visit: "Annual physical.", assertions:[
			{ "observable": NumberInt(100), "observable_type": NumberInt(2), "provenance": NumberInt(200), "provenance_type": NumberInt(2), "value": NumberInt(300), "value_type": NumberInt(2), "issued": new Date('6/15/2014').getTime()},
			{ "observable": NumberInt(100), "observable_type": NumberInt(2), "provenance": NumberInt(200), "provenance_type": NumberInt(2), "value":  NumberInt(300), "value_type": NumberInt(2), "issued": new Date('6/15/2014').getTime()}
		] }
	]	
);

print("completed inserts.");
