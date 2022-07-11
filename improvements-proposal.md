1- Right now the data for the posts is coming from a json file. What changes would you have to make to the application if it came from an API? In what type of hook should you use to fetch the data and why? What other considerations would you have to make?

The changes that would have to be made in the application, so that the data of the publications came from an API, would basically be the following: In the same "DATA" folder, create a file, for example, "getBlogs.js" in which
an asynchronous function is created, called "GetBlogsApi()", in this we make the query to the API with Axios or Fetch, we bring all the data and we return it. This function will be called from the useEffect hook, to synchronize the internal state of the component.
Then from the component that is necessary, we consume this function (which returns an array with blogs) and we assign it to an array and it is the one that we are going to manipulate filtering according to the page that has been selected.
I would take into consideration not making unnecessary API calls, for example, on every page change.

In my opinion, the implementation of Typescript in this part would be ideal. To be able to create a "BLOG" interface and thus have a much more consistent typing in the input and output of data. To avoid errors with data types and to achieve better maintenance in the future.





2- Part of this application uses the package nanoid to generate keys. What issue would this cause for generating keys in React?

Exactly, in the pagination section the NANOID library is used to uniquely identify each item in the pagination. In the Javascript community, the use of NANOID to generate unique keys is not recommended, since there are problems detected by thousands of users, such as the generation of duplicate keys.
Instead, it is recommended to use "createRandomGuid()".









----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

OBSERVATIONS:

The challenge very interesting, I feel that it represents a very real situation and served me to practice.

I like the organization of the folders, it is the same as I apply in all my projects.
I also like the different writing styles that apply to functions and variables.


Note some issues in the code, which solves:
-The first, in the drop -down list to select the amount of blogs per page, by console gives an error that I keep the value as a string. Simply before saving it in the variable, I get it into whole.

-The second, in the call to the function 'usepagination.js', an object is sent with the necessary values, but from the function usepagination they are received without {}, then any of the data could not be accessed.

-The third, contemplate and unify the possibility that only 1, 2 or 3 pages have.



