import React, {useEffect} from 'react';
import styled from "styled-components";
import RestaurantCard from "ui/RestaurantCard";
import useStore from "store";

const Layout = styled.section`

    display: flex;
    flex-direction: column;
    align-items: center;
    
    .resLayout {
        display: flex;
        flex-direction: row;
    }
`

const TopRestaurantsLayout = () => {

    const { getRestaraunts, restaraunts, loading, hasErrors } = useStore();

    useEffect(() => {
        getRestaraunts()
    }, []);

    return (


            <Layout>
                <h2>Our Top <span>Restaurants</span></h2>
                <div className={'resLayout'}>
                {restaraunts.map((res:any)=> <RestaurantCard key={res.id} image={res.image} rating={res.rating} markedBy={res.markedBy} name={res.name} time={res.time}/>)}
                </div>
            </Layout>

    );
};

export default TopRestaurantsLayout;
