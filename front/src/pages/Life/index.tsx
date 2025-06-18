import React from 'react';
import { Container, Title, Description, EventCard, EventContent, EventTitle, EventDescription, EventImage, EventsContainer } from './styles';
import Header from '../../components/header';
import Footer from '../../components/footer';
import { motion } from 'framer-motion';

interface Event {
    title: string;
    description: string;
    imageUrl: string;
}

const events: Event[] = [
    {
        title: "Congresso",
        description: "Participação do laboratório ModMolQSAR no Congresso.",
        imageUrl: "/images/events/congress.jpg"
    }
];

const Life: React.FC = () => {
    return (
        <>
            <Header />
            <Container>
                <Title>Life of ModMolQSAR</Title>
                <Description
                    as={motion.p}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    Conheça os eventos, congressos e momentos de confraternização do nosso laboratório.
                </Description>
                <EventsContainer>
                    {events.map((event, index) => (
                        <EventCard
                            key={index}
                            as={motion.div}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 * index }}
                        >
                            <EventContent>
                                <EventTitle>{event.title}</EventTitle>
                                <EventDescription>{event.description}</EventDescription>
                            </EventContent>
                            <EventImage>
                                <img src={event.imageUrl} alt={event.title} />
                            </EventImage>
                        </EventCard>
                    ))}
                </EventsContainer>
            </Container>
            <Footer />
        </>
    );
};

export default Life;