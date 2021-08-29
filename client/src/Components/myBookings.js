import React, { useEffect } from 'react';
import { getBookings } from '../actions/booking';
import { useDispatch, useSelector } from "react-redux";
import {Table, Container} from "react-bootstrap";

const MyBookings = (props) => {
    const dispatch = useDispatch();
    const bookings = useSelector((state) => state.booking);


    useEffect(() => {
        dispatch(getBookings());
    },[]);

    const renderBookingTable = () => {
        return (
            <Table>
                <thead>
                    <tr>
                        <th>S.NO</th>
                        <th>Service</th>
                        <th>Booking Date</th>
                        <th>Booking Id</th>
                    </tr>
                </thead>

                <tbody>
                {bookings.userBookings.length > 0
                    ? bookings.userBookings.map((userBooking, index)=>(
                        <tr>
                            <td>{index + 1}</td>
                            <td>{userBooking.services}</td>
                            <td>{userBooking.bookingDate}</td>
                            <td>{userBooking._id}</td>
                        </tr>
                    ))
                    : null
                }
                </tbody>
            </Table>
        )
    }


    return (
        <Container>
            {renderBookingTable()}
        </Container>
            
        
    )
}

export default MyBookings
