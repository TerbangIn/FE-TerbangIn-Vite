// import axios from "axios";

// export const ADD_PASSENGER = "ADD_PASSENGER";

// export const addPassenger = (data) => {
//     return (dispatch) => {
//       axios
//         .post(
//            "https://my-json-server.typicode.com/raflimardhian/react-redux/passenger",
//           data
//         )
//         .then(function (response) {
//           console.log(response);
          
//           dispatch({
//             type: ADD_PASSENGER,
//             payload: {
//               data: response.data,
//               errorMessage: false,
//             },
//           });
//         })
//         .catch(function (error) {
//           dispatch({
//             type: ADD_PASSENGER,
//             payload: {
//               data: false,
//               errorMessage: error.message,
//             },
//           });
//         });
//     };
// };