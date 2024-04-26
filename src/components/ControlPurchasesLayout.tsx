import React from 'react';
import styled , {css} from "styled-components";
import { Select, Space } from 'antd';
import DishTag from "ui/DishTag";
import {textTitle, title} from "components/Description";

const Container = styled.section`
    display: flex;
    justify-content: space-around;
    column-gap: 5vw;
    align-items: flex-start;
    padding-top: 100px;
    padding-bottom: 120px;
    border-bottom: 1px solid #cbcbcb
    
    //-moz-column-gap: 10px;
`

const Dashboard = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    
    .title {
        ${title};
        font-size: 50px;
        word-wrap: break-word;
    }

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
        align-items: baseline;
        
        h3 {
            ${textTitle};
            color:black
        }
        
}
        
    
`


const TabsContainer = styled.div`
    display: flex;
    flex-direction: column;
    column-gap: 10px;
    gap: 10px;
    
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

                <h3 className={'title'}>Control <span style={{color:'#6c5fbc;'}}>Purchases</span> Via <br/> Dashboard </h3>

                <DishTag image={'https://live.staticflickr.com/65535/53673278223_e929358404_n.jpg'} dishName={'Chicken King'} delivery={'On The Way'} time={'3.09 PM'} />
                <DishTag dishName={'Chicken Hell'} time={'3.09 PM'} image={'https://live.staticflickr.com/65535/53673278223_e929358404_n.jpg'} delivery={'On The Way'} />
                <DishTag dishName={'Chicken Hell'} time={'3.09 PM'} image={'https://live.staticflickr.com/65535/53673278223_e929358404_n.jpg'} delivery={'On The Way'} />


            </Dashboard>

           <Purchases>



               <div className="purchasesAndSelect">
                   <div><h3>Purchases</h3></div>


                   <Select defaultValue="This Month"

                           style={{ width: 120 }} options={[
                       { value: 'This Week', label: 'This Week' },
                       { value: 'This Month', label: 'This Month' },
                       { value: 'This Year', label: 'This Year' },
                   ]}  />


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
