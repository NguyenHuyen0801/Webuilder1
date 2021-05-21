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
}) => {
  //css icon right trong card
  let cssIos = {
    color: "#C4C4C4",
    fontSize: "15px",
    paddingTop: "3px",
  };
  let cssAndroid = {
    color: "#C4C4C4",
    fontSize: "15px",
    paddingTop: "3px",
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

  //css cardItemIcon left
  let cssGooglePlus = {
    color: "#D23B37",
    marginRight: "5px",
    fontSize: "25px",
  };

  let cssFb = {
    ...cssGooglePlus,
    color: "#2D428B",
  };

  let cssTwitter = {
    fontSize: "27px",
    marginRight: "5px",
    color: "#469AE9",
  };
  let cssLinkIn = {
    ...cssGooglePlus,
    color: "#0D66A7",
  };
  let cssYouTube = {
    ...cssGooglePlus, color: "#CA101E",
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
    return <RedditOutlined style={cssGooglePlus} />;
  }
  if (linkedIn) {
    return <LinkedinFilled style={cssLinkIn} />;
  }
  if (youTube) {
    return <YoutubeFilled style={cssYouTube} />;
  }
  //icon button
  if (work) {
    if (ios) {
      return <ShoppingTwoTone style={cssWorkIos} />;
    } else return <ShoppingTwoTone style={cssWorkAndroid} />;
  }
  if (home) {
    return <HomeFilled style={cssHome} />;
  }
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
  } else if (ios) {
    return <RightOutlined style={cssIos} />;
  } else return <ArrowRightOutlined style={cssAndroid} />;
};
export default Icon;
