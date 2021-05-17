import React from "react";
import {
  ArrowLeftOutlined,
  ArrowRightOutlined,
  LeftOutlined,
  RightOutlined,
  HomeFilled,
  ShoppingTwoTone,
  GooglePlusOutlined,
  FacebookFilled,
  TwitterOutlined,
  RedditOutlined,
  LinkedinFilled,
  YoutubeFilled,
} from "@ant-design/icons";
import "antd/dist/antd.css";

const Icon = ({
  ios,
  arrowLeft,
  arrowRight,
  home,
  work,
  googlePlus,
  twitter,
  reddit,
  facebook,
  linkedIn,
  youTube,
  arrowRightListFb,
  arrowRightListGoogle,
  arrowRightListTwitter,
  arrowRightListReddit,
  arrowRightListLinkIn,
  arrowRightListYouTube,
}) => {
  //css icon left
  let cssIos = {
    color: "#0a60ff",
    fontSize: "19px",
  };
  let cssAndroid = {
    color: "white",
    fontSize: "19px",
  };

  //css icon left, right button
  let cssArrowIos = {
    color: "black",
    margin: "3px",
    marginRight: "8px",
    marginLeft: "1px",
    fontSize: "19px",
  };
  let cssHome = {
    margin: "3px",
    marginRight: "8px",
    marginLeft: "1px",
    fontSize: "16px",
    color: "#fff",
  };
  let cssWorkIos = {
    ...cssHome,
    fontSize: "19px",
    color: "#0a60ff",
  };
  let cssWorkAndroid = {
    ...cssWorkIos,
    color: "#3f51b5",
  };

  //css icon right card (arrowRight)
  let cssArrowIosListGoogle = {
    margin: "3px",
    marginLeft: "143px",
    color: "gray",
    fontSize: "15px",
  }
  let cssArrowIosListFb = {
    ...cssArrowIosListGoogle,
    marginLeft: "162px",
  };
  let cssArrowIosListTwitter = {
    ...cssArrowIosListGoogle,
    marginLeft: "175px",
  };
  let cssArrowIosListReddit = {
    ...cssArrowIosListGoogle,
    marginLeft: "179px",
  };

  let cssArrowIosListLinkIn = {
    ...cssArrowIosListGoogle,
    marginLeft: "165px",
  };

  let cssArrowIosListYouTube = {
    ...cssArrowIosListGoogle,
    marginLeft: "165px",
  };

  //css cardItemIcon left
  let cssGooglePlus = {
    color: "red",
    marginRight: "5px",
    fontSize: "20px",
  };

  let cssFb = {
    ...cssGooglePlus,
    color: "blue",
  };

  let cssTwitter = {
    marginRight: "5px",
    fontSize: "22px",
    color: "blue",
  };

  let cssReddit = {
    ...cssGooglePlus,
  };

  let cssYoutube = {
    ...cssGooglePlus,
  };

  //Icon trong button
  if (arrowLeft) {
    if (ios) {
      return <LeftOutlined style={cssArrowIos} />;
    } else {
      return <ArrowLeftOutlined style={cssArrowIos} />;
    }
  }
  if (arrowRight) {
    if (ios) {
      return <RightOutlined style={cssArrowIos} />;
    } else return <ArrowRightOutlined style={cssArrowIos} />;
  }

  //icon left trong card
  if (googlePlus) {
    return <GooglePlusOutlined style={cssGooglePlus} />;
  }
  if (twitter) {
    return <TwitterOutlined style={cssTwitter} />;
  }
  if (facebook) {
    return <FacebookFilled style={cssFb} />;
  }
  if (reddit) {
    return <RedditOutlined style={cssReddit} />;
  }
  if (linkedIn) {
    return <LinkedinFilled  style={cssReddit} />;
  }
  if (youTube) {
    return <YoutubeFilled  style={cssReddit} />;
  }

  //ArrowRightCard
  if (arrowRightListGoogle) {
    if (ios) {
      return <RightOutlined style={cssArrowIosListGoogle} />;
    } else return <ArrowRightOutlined style={cssArrowIosListGoogle} />;
  }
  if (arrowRightListFb) {
    if (ios) {
      return <RightOutlined style={cssArrowIosListFb} />;
    } else return <ArrowRightOutlined style={cssArrowIosListFb} />;
  }
  if (arrowRightListTwitter) {
    if (ios) {
      return <RightOutlined style={cssArrowIosListTwitter} />;
    } else return <ArrowRightOutlined style={cssArrowIosListTwitter} />;
  }
  if (arrowRightListReddit) {
    if (ios) {
      return <RightOutlined style={cssArrowIosListReddit} />;
    } else return <ArrowRightOutlined style={cssArrowIosListReddit} />;
  }
  if (arrowRightListLinkIn) {
    if (ios) {
      return <RightOutlined style={cssArrowIosListLinkIn} />;
    } else return <ArrowRightOutlined style={cssArrowIosListLinkIn} />;
  }
  if (arrowRightListYouTube) {
    if (ios) {
      return <RightOutlined style={cssArrowIosListYouTube} />;
    } else return <ArrowRightOutlined style={cssArrowIosListYouTube} />;
  }

  //icon button
  if (home) {
    return <HomeFilled style={cssHome} />;
  }
  if (work) {
    if (ios) {
      return <ShoppingTwoTone style={cssWorkIos} />;
    } else return <ShoppingTwoTone style={cssWorkAndroid} />;
  }
};
export default Icon;
