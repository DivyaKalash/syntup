import React, { useEffect } from 'react'
import { Container, Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux'
import { getAllBookings } from '../../actions/booking';

const AllBookings = () => {
    const dispatch = useDispatch();
    const booking = useSelector((state) => state.booking);
    useEffect(()=>{
        dispatch(getAllBookings());
    }, []);
let count = 0;
    // const printBookings = (bookings)=> {
    //     for(let i = 0; i <= bookings.length; i++){
    //         console.log(bookings[i]);
    //         for(let j = 0; j <= bookings[i].bookingItems.length; j++){
    //            <tr>
    //                 <td>{count++}</td>
    //                <td>{bookings[i].user}</td>
    //                 <td>{bookings[i].bookingItems[j].services}</td>
    //                 <td>{bookings[i].bookingItems[j].bookingDate}</td>
    //             </tr>
    //         }
    //     }
    // }
    const renderAllBookingTable = (booking) => {
        return (
            <Table>
                <thead>
                    <tr>
                        <th>S.NO</th>
                        <th>Customer</th>
                        <th>Service</th>
                        <th>Booking Date</th>
                    </tr>
                </thead>

                <tbody>
                {booking.length > 0 
                 
                ?  booking.map((book, index)=>(
                    <tr>
                        <td>{index + 1}</td>
                        <td>{book.user}</td>
                        <td>{book.services}</td>
                        <td>{book.bookingDate}</td>
                    </tr>
                ))
                :null

                }
                    
                    
                
                </tbody>
            </Table>
        )
    }
// console.log(bookings.bookings.allBookings.bookings);
    return (
        <Container style={{marginTop: "130px"}}>
            {renderAllBookingTable(booking.bookings)}
        </Container>
    )
}

export default AllBookings
