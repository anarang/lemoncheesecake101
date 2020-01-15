var reporting_data = {"lemoncheesecake_version": "1.2.2", "report_version": 1.1, "start_time": "2020-01-15T17:52:35.671Z", "end_time": "2020-01-15T17:52:39.325Z", "generation_time": "2020-01-15T17:52:39.326Z", "nb_threads": 1, "title": "Test Report", "info": [["Command line", "lcc run"]], "suites": [{"start_time": "2020-01-15T17:52:35.673Z", "end_time": "2020-01-15T17:52:39.324Z", "tests": [{"start_time": "2020-01-15T17:52:35.673Z", "end_time": "2020-01-15T17:52:36.514Z", "steps": [{"description": "checking for endpoint: https://jsonplaceholder.typicode.com/users/1", "start_time": "2020-01-15T17:52:35.673Z", "end_time": "2020-01-15T17:52:36.514Z", "entries": [{"type": "check", "description": "Expect response code to be equal to 200", "is_successful": true, "details": "Got 200", "time": "2020-01-15T17:52:36.514Z"}]}], "status": "passed", "status_details": null, "name": "test_get_users", "description": "Verify that GET request for users/1 gives a 200 OK", "tags": [], "properties": {}, "links": []}, {"start_time": "2020-01-15T17:52:36.516Z", "end_time": "2020-01-15T17:52:37.174Z", "steps": [{"description": "Verify that GET request for /users/1 contains required params", "start_time": "2020-01-15T17:52:36.516Z", "end_time": "2020-01-15T17:52:37.174Z", "entries": [{"type": "check", "description": "Expect the response  to have entry \"name\"", "is_successful": true, "details": "Got \"Leanne Graham\"", "time": "2020-01-15T17:52:37.172Z"}, {"type": "check", "description": "Expect the resposne to have entry \"email\" that contains \"@\"", "is_successful": true, "details": "Got \"Sincere@april.biz\"", "time": "2020-01-15T17:52:37.173Z"}, {"type": "check", "description": "Expect the response  to have entry \"address\" that is a collection", "is_successful": true, "details": "Got {\"street\": \"Kulas Light\", \"suite\": \"Apt. 556\", \"city\": \"Gwenborough\", \"zipcode\": \"92998-3874\", \"geo\": {\"lat\": \"-37.3159\", \"lng\": \"81.1496\"}}", "time": "2020-01-15T17:52:37.173Z"}, {"type": "check", "description": "Expect the response to have entry \"address\" that has entry \"city\" that is equal to \"Gwenborough\"", "is_successful": true, "details": "Got \"Gwenborough\"", "time": "2020-01-15T17:52:37.173Z"}]}], "status": "passed", "status_details": null, "name": "test_get_users_params", "description": "Verify that GET request for /users/1 contains required params", "tags": [], "properties": {}, "links": []}, {"start_time": "2020-01-15T17:52:37.175Z", "end_time": "2020-01-15T17:52:38.228Z", "steps": [{"description": "Verify that POST request to /posts is successful", "start_time": "2020-01-15T17:52:37.176Z", "end_time": "2020-01-15T17:52:38.228Z", "entries": [{"type": "check", "description": "Expect the POSt request response to be equal to 201", "is_successful": true, "details": "Got 201", "time": "2020-01-15T17:52:38.227Z"}, {"type": "log", "level": "info", "message": "{'title': 'Title for Devconf.CZ 2020', 'body': 'Test title by Anisha', 'userId': '500', 'id': 101}", "time": "2020-01-15T17:52:38.227Z"}, {"type": "check", "description": "Expect the response to have entry \"title\" that is equal to \"Title for Devconf.CZ 2020\"", "is_successful": true, "details": "Got \"Title for Devconf.CZ 2020\"", "time": "2020-01-15T17:52:38.227Z"}]}], "status": "passed", "status_details": null, "name": "test_post_req", "description": "Verify that POST request to /posts is successful", "tags": [], "properties": {}, "links": []}, {"start_time": "2020-01-15T17:52:38.229Z", "end_time": "2020-01-15T17:52:39.322Z", "steps": [{"description": "Verify that the DELETE request to /posts/1 gives 200 OK", "start_time": "2020-01-15T17:52:38.230Z", "end_time": "2020-01-15T17:52:39.322Z", "entries": [{"type": "check", "description": "Expect  the response for delete request to be equal to 200", "is_successful": true, "details": "Got 200", "time": "2020-01-15T17:52:39.322Z"}, {"type": "log", "level": "info", "message": "Making sure that the DELETE request was successful: {}", "time": "2020-01-15T17:52:39.322Z"}]}], "status": "passed", "status_details": null, "name": "test_del_req", "description": "Verify that the DELETE request to /posts/1 gives 200 OK", "tags": [], "properties": {}, "links": []}], "suites": [], "name": "test_get_users", "description": "Sample API tests for GET, POST, DELETE ", "tags": [], "properties": {}, "links": []}]}