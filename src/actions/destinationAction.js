import axios from 'axios';
export const GET_FLIGHT = "GET_FLIGHT";

export const getFlight = () => {
    return (dispatch) => {
        axios.get('https://be-tiketku-production.up.railway.app/api/v1/flight', {
            headers: {
                Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJzYXlhYWRtaW5AZ21haWwuY29tIiwicm9sZSI6ImFkbWluIiwiaWF0IjoxNjg2NjUwNDkwfQ.JwtvxhdOFVSSCUHyipUaS8LLG3u8jX4uhk-JhbuyBGc`
            }
        })
            .then(function (response) {
                console.log(response.data.data)
                dispatch({
                    type: GET_FLIGHT,
                    payload: {
                        data: response.data.data
                    }
                })
            })
            .catch(function (error) {
                console.log(error.message)
                dispatch({
                    type: GET_FLIGHT,
                    payload: {
                        data: []
                    }
                })
            })
    }
}