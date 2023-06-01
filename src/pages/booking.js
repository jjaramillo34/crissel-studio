import React, { Fragment } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import BookingForm from '../components/booking/BookingForm';
import { FloatingWhatsApp } from 'react-floating-whatsapp';

const BookingPage = () => {
    return (
        <Fragment>
            <Header />
            <FloatingWhatsApp 
                phoneNumber="+593992950683" 
                accountName="Crissel Make Up" 
                avatar="https://scontent-lga3-1.xx.fbcdn.net/v/t39.30808-1/329125449_1592007401342162_1284423828634930606_n.jpg?stp=dst-jpg_s200x200&_nc_cat=102&ccb=1-7&_nc_sid=c6021c&_nc_ohc=1IGy_i-S0sMAX9FCPZ9&_nc_ht=scontent-lga3-1.xx&oh=00_AfCXIHGiimjgDQ_QAhb3r-bdlLiCJjbPD73FuoDaDXgCJw&oe=6470C384" 
                statusMessage="Hola, en que podemos ayudarte?"
                chatMessage="Hola, en que podemos ayudarte?"
                allowEsc
                notification
                notificationSound={true}
                defaultCountry="EC"
                popupMessage="Hola, en que podemos ayudarte?"
                allowClickAway={true}
            />
            
            <div id="content" className="site-content content-wrapper page-content">
                <div className="page type-page hentry">
                    <div className="page-content-body">
                        <BookingForm />
                    </div>
                </div>
            </div>
            
            <div className="clearfix"></div>
            <Footer />
        </Fragment>        
        );
    }

export default BookingPage;
