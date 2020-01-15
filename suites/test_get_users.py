import lemoncheesecake.api as lcc
from lemoncheesecake.matching import *
import requests


SUITE = {
    "description": "Sample API tests for GET, POST, DELETE "
}


base_url = "https://jsonplaceholder.typicode.com"


@lcc.test("Verify that GET request for users/1 gives a 200 OK")
def test_get_users():
    lcc.set_step("checking for endpoint: https://jsonplaceholder.typicode.com/users/1")
    response = requests.get(url=base_url + "/users/1")
    check_that("response code", response.status_code, equal_to(200), quiet=False)


@lcc.test("Verify that GET request for /users/1 contains required params")
def test_get_users_params():
    response = requests.get(url=base_url + "/users/1")
    result = response.json()
    check_that("the response ", result, has_entry("name"))
    require_that("the resposne", result, has_entry("email", contains_string("@")))
    assert_that("the response ", result, has_entry("username", equal_to("Bret")))
    check_that("the response ", result, has_entry("address", is_dict()))
    require_that("the response", result, has_entry("address", has_entry("city", equal_to("Gwenborough"))))


@lcc.test("Verify that POST request to /posts is successful")
def test_post_req():
    body = {
      "title": 'Title for Devconf.CZ 2020',
      "body": 'Test title by Anisha',
      "userId": 500
    }
    response = requests.post(base_url + "/posts", data=body)
    result= response.json()
    require_that("the POSt request response", response.status_code, equal_to(201))
    lcc.log_info(str(result))
    check_that("the response", result, has_entry("title", equal_to("Title for Devconf.CZ 2020")))


@lcc.test("Verify that the DELETE request to /posts/1 gives 200 OK")
def test_del_req():
    response = requests.delete(base_url + "/posts/1")
    result = response.json()
    check_that(" the response for delete request", response.status_code, equal_to(200))
    assert_that(" the response for delete request", response.status_code, equal_to(200))
    lcc.log_info("Making sure that the DELETE request was successful: %s" % str(result))
