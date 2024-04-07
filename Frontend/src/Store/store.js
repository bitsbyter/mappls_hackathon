import {configureStore} from "@reduxjs/toolkit"
import ActiveUserSlice from "./userSlice";
import UserCoordsSlice from "./userCoordsSlice";
import UserAnswerSlice from "./userAnswerSlice";
import CarouselDataSlice from "./CarouselDataSlice";
import AskedPlace from "./AskedPlaceSlice";
import userRadiusSlice from "./userRadiusSlice";
import NearByChoice from "./UserChoiceSlice";
import RoutingPlace from "./RoutingPlace";
import LeaderBoardSlice from "./LeaderBoard";
import UserCategoryDataSlice from "./CurrentUserPointsPrefSlice";
const store=configureStore({
    reducer:{
      activeUser:ActiveUserSlice.reducer,
      userCoords:UserCoordsSlice.reducer,
      userAnswerCoords:UserAnswerSlice.reducer,
      carouselData:CarouselDataSlice.reducer,
      askedPlace:AskedPlace.reducer,
      userRadius:userRadiusSlice.reducer,
      nearbyChoice:NearByChoice.reducer,
      routingPlace:RoutingPlace.reducer,
      scoreBoard:LeaderBoardSlice.reducer,
      userCategoryData:UserCategoryDataSlice.reducer,
      nearbyPlace:NearByChoice.reducer
    }
});

export default store;