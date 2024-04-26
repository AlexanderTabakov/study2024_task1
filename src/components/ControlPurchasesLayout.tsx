import React from 'react';
import styled from "styled-components";
import { Select, Space } from 'antd';
import value from "*.png";
import DishTag from "ui/DishTag";

const Container = styled.section`
    display: flex;
    justify-content: space-around;
    align-items: flex-start;    
    column-gap: 10px;
    padding-top: 100px;
    padding-bottom: 120px;
    border-bottom: 1px solid #cbcbcb
    
    //-moz-column-gap: 10px;
`

const Dashboard = styled.div`

`

const Purchases = styled.div`
    
    display: flex;
    flex-direction: column;
    
    align-items: flex-end;
    border-radius: 25px;
    box-shadow: 0 20px 30px rgba(50, 49, 66, 0.2);
    padding: 43px;
    
    
    .purchasesAndSelect{
        display: flex;
        flex-direction: row;
        
}
        
    
`


const TabsContainer = styled.div`
    display: flex;
    flex-direction: column;
    column-gap: 10px;
    
    .tab1 {
        width: 460px;
        height: 135px;
        
        background-image: url(/card.svg)
    }

    .tab2 {
        width: 460px;
        height: 135px;
        background-image: url(/card1.svg)
    }
`

const ControlPurchasesLayout = () => {
    return (
       <Container>

            <Dashboard>

                <DishTag image={'https://live.staticflickr.com/65535/53673278223_e929358404_n.jpg'} dishName={'Chicken King'} delivery={'On The Way'} time={'3.09 PM'} />
                <DishTag dishName={'Chicken Hell'} time={'3.09 PM'} image={'https://live.staticflickr.com/65535/53673278223_e929358404_n.jpg'} delivery={'On The Way'} />
                <DishTag dishName={'Chicken Hell'} time={'3.09 PM'} image={'https://live.staticflickr.com/65535/53673278223_e929358404_n.jpg'} delivery={'On The Way'} />


            </Dashboard>

           <Purchases>



               <div className="purchasesAndSelect">
                   <div><h3>Purchases</h3></div>


                   <div>

                   <Select defaultValue="This Month"

                           style={{ width: 120 }} options={[
                       { value: 'This Week', label: 'This Week' },
                       { value: 'This Month', label: 'This Month' },
                       { value: 'This Year', label: 'This Year' },
                   ]}  />
                   </div>

               </div>

               <TabsContainer>
                   <div className={'tab1'}></div>
                   <div className={'tab2'}></div>
               </TabsContainer>


           </Purchases>


       </Container>
    );
};

export default ControlPurchasesLayout;
