## Week 7 Exercises

### Exercise 1
We need a structure capable of holding rare animal sighting data for the National University of Exland. In this session, we will create a JSON structure capable of holding such data, and a JSON Schema against which we can validate our rare animal sighting data.
1. Create a JSON Data File
2. Create a new file in your chosen editor (e.g. Sublime). Save it as 'sightings.json'.
3. You will recall that a sighting report requires the following data: id, animal, number, location, date, time, observer (name, email), and observations.
4. We need to make sure that our JSON structure accounts for each of these data elements.

### Exercise 2
1. Create a JSON Schema. We will create a JSON Schema to validate sighting data. The schema will also be written in JSON.
2 Open your editor and create a new file. Save it as sightingschema.json.
3. Create the structure for the JSON Data: First, create the outer container object. Inside this object, add a JSON Schema declaration, and a title and description for sighting data.
4. Testing your Schema:
		* Open sightings.json and sightingschema.json. Go to JSON Schema Validator.
		* Paste your schema code in the left window, and your JSON code in the right window. The software will automatically produce a conformance report for the JSON. 
		* Address any errors indicated by the validator.