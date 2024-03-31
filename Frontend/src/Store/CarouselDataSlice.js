import { createSlice } from "@reduxjs/toolkit";


const CarouselDataSlice=createSlice({
    name:"carouselData",
    initialState:[],
    reducers:{
        setCarouselData:(state,action)=>{
            const CarouselData=(action.payload);
            console.log(CarouselData);
            return CarouselData
        }
    }
})
export const CarouselDataActions=CarouselDataSlice.actions;
export default CarouselDataSlice