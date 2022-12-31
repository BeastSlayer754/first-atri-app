import { useLayoutEffect, useEffect } from "react";
import useStore, { updateStoreStateFromController } from "../hooks/useStore";
import useIoStore from "../hooks/useIoStore";
import { useNavigate, useLocation } from "react-router-dom";
import { subscribeInternalNavigation } from "../utils/navigate";
import {fetchPageProps} from "../utils/fetchPageProps"
import { Div } from "@atrilabs/react-component-manifests/src/manifests/Div/Div.tsx";
import { Flex } from "@atrilabs/react-component-manifests/src/manifests/Flex/Flex.tsx";
import { Image } from "@atrilabs/react-component-manifests/src/manifests/Image/Image.tsx";
import { Link } from "@atrilabs/react-component-manifests/src/manifests/Link/Link.tsx";
import { TextBox } from "@atrilabs/react-component-manifests/src/manifests/TextBox/TextBox.tsx";
import { Button } from "@atrilabs/react-component-manifests/src/manifests/Button/Button.tsx";
import { UnorderedList } from "@atrilabs/react-component-manifests/src/manifests/UnorderedList/UnorderedList.tsx";
import { useNavbarCb, useMain_DivCb, useHome_DivCb, useHome_Div_LeftCb, useFlex4Cb, useMain_Div_2Cb, useSecond_DivCb, useImage_DivCb, useDiv22Cb, useSErvicesCb, useGridCb, useFirst_Div_GridCb, useSecod_Div_GridCb, useThird_DIv_GridCb, useProjCb, useSliderCb, useMain_SliderCb, useDiv37Cb, useBlog_DCb, useBlog_FlexCb, useSub_HeadingCb, useSub_Heading_2Cb, useDesignerCb, useProduct_FlexCb, useHalf_1Cb, useHalf_2Cb, useImage_GridCb, useImage1Cb, useImage2Cb, useImage4Cb, useEducationCb, useEducation_FlexCb, useEducCb, useLearningCb, useExpCb, useExp_1Cb, useTestimonialCb, useTest_1Cb, useTest_2Cb, useDiv64Cb, useDiv65Cb, useFooterCb, useMajor_Flex_1Cb, useHeading_FCb, useGridsCb, useFlex_BodyCb, useContactCb, useCFlexCb, useCFlex_1Cb, useCFlex_2Cb, useAddCb, useCGridCb, useCFlex_3Cb, useSC3Cb, useHome_LogoCb, useBlogCb, useAboutCb, useCallCb, useProjectCb, useServicesCb, useText_Box_1Cb, useText_Box_2Cb, usePara_BoxCb, useBookCb, useDownload_CVCb, useImage8Cb, useCenter_BoxCb, useImage12Cb, useImage13Cb, useImage14Cb, useImage15Cb, useServicessCb, useHome_LineCb, useHome_Line_2Cb, useImage20Cb, useExceptCb, usePara_1_GridCb, useUnorderedList4Cb, useImage21Cb, useAppsCb, usePara_2_GridCb, useUnorderedList3Cb, useImage22Cb, useWhatCb, usePara_3_DivCb, useUnorderedList2Cb, useProject_HCb, useFirst_LineCb, useSecond_LineCb, useViewCb, useImage23Cb, useBRANDCb, useBlog_TextCb, useSubCb, useView_AllCb, useUnorderedList6Cb, useProdCb, useProd_2Cb, useIntroCb, useFullCb, useFull_2Cb, useHalf_pCb, useUnorderedList7Cb, useText_LCb, useUnorderedList8Cb, useText_ECb, useHeadingCb, useSubsCb, usePersonCb, useLogoCb, useStart_TextCb, useAuthorCb, usePositionCb, useFAQCb, useDescCb, useUnorderedList9Cb, useUnorderedList10Cb, useHead_CCb, useSubHCb, useHomeICb, useaddCb, useEmailCb, useALCb, useSECb, useEXCb, useCOCb, useDRCb, useTWCb, useINCb, useBLCb, usePRCb, useCpyCb } from "../page-cbs/Home";
import "../page-css/Home.css";
import "../custom/Home";

export default function Home() {
  const navigate = useNavigate();
  useEffect(() => {
    const unsub = subscribeInternalNavigation((url) => {
      navigate(url);
    });
    return unsub;
  }, [navigate]);

  const location = useLocation();
  useLayoutEffect(()=>{
    fetchPageProps(location.pathname, location.search).then((res)=>{
      updateStoreStateFromController(res.pageName, res.pageState)
    })
  }, [location])

  const NavbarProps = useStore((state)=>state["Home"]["Navbar"]);
const NavbarIoProps = useIoStore((state)=>state["Home"]["Navbar"]);
const NavbarCb = useNavbarCb()
const Main_DivProps = useStore((state)=>state["Home"]["Main_Div"]);
const Main_DivIoProps = useIoStore((state)=>state["Home"]["Main_Div"]);
const Main_DivCb = useMain_DivCb()
const Home_DivProps = useStore((state)=>state["Home"]["Home_Div"]);
const Home_DivIoProps = useIoStore((state)=>state["Home"]["Home_Div"]);
const Home_DivCb = useHome_DivCb()
const Home_Div_LeftProps = useStore((state)=>state["Home"]["Home_Div_Left"]);
const Home_Div_LeftIoProps = useIoStore((state)=>state["Home"]["Home_Div_Left"]);
const Home_Div_LeftCb = useHome_Div_LeftCb()
const Flex4Props = useStore((state)=>state["Home"]["Flex4"]);
const Flex4IoProps = useIoStore((state)=>state["Home"]["Flex4"]);
const Flex4Cb = useFlex4Cb()
const Main_Div_2Props = useStore((state)=>state["Home"]["Main_Div_2"]);
const Main_Div_2IoProps = useIoStore((state)=>state["Home"]["Main_Div_2"]);
const Main_Div_2Cb = useMain_Div_2Cb()
const Second_DivProps = useStore((state)=>state["Home"]["Second_Div"]);
const Second_DivIoProps = useIoStore((state)=>state["Home"]["Second_Div"]);
const Second_DivCb = useSecond_DivCb()
const Image_DivProps = useStore((state)=>state["Home"]["Image_Div"]);
const Image_DivIoProps = useIoStore((state)=>state["Home"]["Image_Div"]);
const Image_DivCb = useImage_DivCb()
const Div22Props = useStore((state)=>state["Home"]["Div22"]);
const Div22IoProps = useIoStore((state)=>state["Home"]["Div22"]);
const Div22Cb = useDiv22Cb()
const SErvicesProps = useStore((state)=>state["Home"]["SErvices"]);
const SErvicesIoProps = useIoStore((state)=>state["Home"]["SErvices"]);
const SErvicesCb = useSErvicesCb()
const GridProps = useStore((state)=>state["Home"]["Grid"]);
const GridIoProps = useIoStore((state)=>state["Home"]["Grid"]);
const GridCb = useGridCb()
const First_Div_GridProps = useStore((state)=>state["Home"]["First_Div_Grid"]);
const First_Div_GridIoProps = useIoStore((state)=>state["Home"]["First_Div_Grid"]);
const First_Div_GridCb = useFirst_Div_GridCb()
const Secod_Div_GridProps = useStore((state)=>state["Home"]["Secod_Div_Grid"]);
const Secod_Div_GridIoProps = useIoStore((state)=>state["Home"]["Secod_Div_Grid"]);
const Secod_Div_GridCb = useSecod_Div_GridCb()
const Third_DIv_GridProps = useStore((state)=>state["Home"]["Third_DIv_Grid"]);
const Third_DIv_GridIoProps = useIoStore((state)=>state["Home"]["Third_DIv_Grid"]);
const Third_DIv_GridCb = useThird_DIv_GridCb()
const ProjProps = useStore((state)=>state["Home"]["Proj"]);
const ProjIoProps = useIoStore((state)=>state["Home"]["Proj"]);
const ProjCb = useProjCb()
const SliderProps = useStore((state)=>state["Home"]["Slider"]);
const SliderIoProps = useIoStore((state)=>state["Home"]["Slider"]);
const SliderCb = useSliderCb()
const Main_SliderProps = useStore((state)=>state["Home"]["Main_Slider"]);
const Main_SliderIoProps = useIoStore((state)=>state["Home"]["Main_Slider"]);
const Main_SliderCb = useMain_SliderCb()
const Div37Props = useStore((state)=>state["Home"]["Div37"]);
const Div37IoProps = useIoStore((state)=>state["Home"]["Div37"]);
const Div37Cb = useDiv37Cb()
const Blog_DProps = useStore((state)=>state["Home"]["Blog_D"]);
const Blog_DIoProps = useIoStore((state)=>state["Home"]["Blog_D"]);
const Blog_DCb = useBlog_DCb()
const Blog_FlexProps = useStore((state)=>state["Home"]["Blog_Flex"]);
const Blog_FlexIoProps = useIoStore((state)=>state["Home"]["Blog_Flex"]);
const Blog_FlexCb = useBlog_FlexCb()
const Sub_HeadingProps = useStore((state)=>state["Home"]["Sub_Heading"]);
const Sub_HeadingIoProps = useIoStore((state)=>state["Home"]["Sub_Heading"]);
const Sub_HeadingCb = useSub_HeadingCb()
const Sub_Heading_2Props = useStore((state)=>state["Home"]["Sub_Heading_2"]);
const Sub_Heading_2IoProps = useIoStore((state)=>state["Home"]["Sub_Heading_2"]);
const Sub_Heading_2Cb = useSub_Heading_2Cb()
const DesignerProps = useStore((state)=>state["Home"]["Designer"]);
const DesignerIoProps = useIoStore((state)=>state["Home"]["Designer"]);
const DesignerCb = useDesignerCb()
const Product_FlexProps = useStore((state)=>state["Home"]["Product_Flex"]);
const Product_FlexIoProps = useIoStore((state)=>state["Home"]["Product_Flex"]);
const Product_FlexCb = useProduct_FlexCb()
const Half_1Props = useStore((state)=>state["Home"]["Half_1"]);
const Half_1IoProps = useIoStore((state)=>state["Home"]["Half_1"]);
const Half_1Cb = useHalf_1Cb()
const Half_2Props = useStore((state)=>state["Home"]["Half_2"]);
const Half_2IoProps = useIoStore((state)=>state["Home"]["Half_2"]);
const Half_2Cb = useHalf_2Cb()
const Image_GridProps = useStore((state)=>state["Home"]["Image_Grid"]);
const Image_GridIoProps = useIoStore((state)=>state["Home"]["Image_Grid"]);
const Image_GridCb = useImage_GridCb()
const Image1Props = useStore((state)=>state["Home"]["Image1"]);
const Image1IoProps = useIoStore((state)=>state["Home"]["Image1"]);
const Image1Cb = useImage1Cb()
const Image2Props = useStore((state)=>state["Home"]["Image2"]);
const Image2IoProps = useIoStore((state)=>state["Home"]["Image2"]);
const Image2Cb = useImage2Cb()
const Image4Props = useStore((state)=>state["Home"]["Image4"]);
const Image4IoProps = useIoStore((state)=>state["Home"]["Image4"]);
const Image4Cb = useImage4Cb()
const EducationProps = useStore((state)=>state["Home"]["Education"]);
const EducationIoProps = useIoStore((state)=>state["Home"]["Education"]);
const EducationCb = useEducationCb()
const Education_FlexProps = useStore((state)=>state["Home"]["Education_Flex"]);
const Education_FlexIoProps = useIoStore((state)=>state["Home"]["Education_Flex"]);
const Education_FlexCb = useEducation_FlexCb()
const EducProps = useStore((state)=>state["Home"]["Educ"]);
const EducIoProps = useIoStore((state)=>state["Home"]["Educ"]);
const EducCb = useEducCb()
const LearningProps = useStore((state)=>state["Home"]["Learning"]);
const LearningIoProps = useIoStore((state)=>state["Home"]["Learning"]);
const LearningCb = useLearningCb()
const ExpProps = useStore((state)=>state["Home"]["Exp"]);
const ExpIoProps = useIoStore((state)=>state["Home"]["Exp"]);
const ExpCb = useExpCb()
const Exp_1Props = useStore((state)=>state["Home"]["Exp_1"]);
const Exp_1IoProps = useIoStore((state)=>state["Home"]["Exp_1"]);
const Exp_1Cb = useExp_1Cb()
const TestimonialProps = useStore((state)=>state["Home"]["Testimonial"]);
const TestimonialIoProps = useIoStore((state)=>state["Home"]["Testimonial"]);
const TestimonialCb = useTestimonialCb()
const Test_1Props = useStore((state)=>state["Home"]["Test_1"]);
const Test_1IoProps = useIoStore((state)=>state["Home"]["Test_1"]);
const Test_1Cb = useTest_1Cb()
const Test_2Props = useStore((state)=>state["Home"]["Test_2"]);
const Test_2IoProps = useIoStore((state)=>state["Home"]["Test_2"]);
const Test_2Cb = useTest_2Cb()
const Div64Props = useStore((state)=>state["Home"]["Div64"]);
const Div64IoProps = useIoStore((state)=>state["Home"]["Div64"]);
const Div64Cb = useDiv64Cb()
const Div65Props = useStore((state)=>state["Home"]["Div65"]);
const Div65IoProps = useIoStore((state)=>state["Home"]["Div65"]);
const Div65Cb = useDiv65Cb()
const FooterProps = useStore((state)=>state["Home"]["Footer"]);
const FooterIoProps = useIoStore((state)=>state["Home"]["Footer"]);
const FooterCb = useFooterCb()
const Major_Flex_1Props = useStore((state)=>state["Home"]["Major_Flex_1"]);
const Major_Flex_1IoProps = useIoStore((state)=>state["Home"]["Major_Flex_1"]);
const Major_Flex_1Cb = useMajor_Flex_1Cb()
const Heading_FProps = useStore((state)=>state["Home"]["Heading_F"]);
const Heading_FIoProps = useIoStore((state)=>state["Home"]["Heading_F"]);
const Heading_FCb = useHeading_FCb()
const GridsProps = useStore((state)=>state["Home"]["Grids"]);
const GridsIoProps = useIoStore((state)=>state["Home"]["Grids"]);
const GridsCb = useGridsCb()
const Flex_BodyProps = useStore((state)=>state["Home"]["Flex_Body"]);
const Flex_BodyIoProps = useIoStore((state)=>state["Home"]["Flex_Body"]);
const Flex_BodyCb = useFlex_BodyCb()
const ContactProps = useStore((state)=>state["Home"]["Contact"]);
const ContactIoProps = useIoStore((state)=>state["Home"]["Contact"]);
const ContactCb = useContactCb()
const CFlexProps = useStore((state)=>state["Home"]["CFlex"]);
const CFlexIoProps = useIoStore((state)=>state["Home"]["CFlex"]);
const CFlexCb = useCFlexCb()
const CFlex_1Props = useStore((state)=>state["Home"]["CFlex_1"]);
const CFlex_1IoProps = useIoStore((state)=>state["Home"]["CFlex_1"]);
const CFlex_1Cb = useCFlex_1Cb()
const CFlex_2Props = useStore((state)=>state["Home"]["CFlex_2"]);
const CFlex_2IoProps = useIoStore((state)=>state["Home"]["CFlex_2"]);
const CFlex_2Cb = useCFlex_2Cb()
const AddProps = useStore((state)=>state["Home"]["Add"]);
const AddIoProps = useIoStore((state)=>state["Home"]["Add"]);
const AddCb = useAddCb()
const CGridProps = useStore((state)=>state["Home"]["CGrid"]);
const CGridIoProps = useIoStore((state)=>state["Home"]["CGrid"]);
const CGridCb = useCGridCb()
const CFlex_3Props = useStore((state)=>state["Home"]["CFlex_3"]);
const CFlex_3IoProps = useIoStore((state)=>state["Home"]["CFlex_3"]);
const CFlex_3Cb = useCFlex_3Cb()
const SC3Props = useStore((state)=>state["Home"]["SC3"]);
const SC3IoProps = useIoStore((state)=>state["Home"]["SC3"]);
const SC3Cb = useSC3Cb()
const Home_LogoProps = useStore((state)=>state["Home"]["Home_Logo"]);
const Home_LogoIoProps = useIoStore((state)=>state["Home"]["Home_Logo"]);
const Home_LogoCb = useHome_LogoCb()
const BlogProps = useStore((state)=>state["Home"]["Blog"]);
const BlogIoProps = useIoStore((state)=>state["Home"]["Blog"]);
const BlogCb = useBlogCb()
const AboutProps = useStore((state)=>state["Home"]["About"]);
const AboutIoProps = useIoStore((state)=>state["Home"]["About"]);
const AboutCb = useAboutCb()
const CallProps = useStore((state)=>state["Home"]["Call"]);
const CallIoProps = useIoStore((state)=>state["Home"]["Call"]);
const CallCb = useCallCb()
const ProjectProps = useStore((state)=>state["Home"]["Project"]);
const ProjectIoProps = useIoStore((state)=>state["Home"]["Project"]);
const ProjectCb = useProjectCb()
const ServicesProps = useStore((state)=>state["Home"]["Services"]);
const ServicesIoProps = useIoStore((state)=>state["Home"]["Services"]);
const ServicesCb = useServicesCb()
const Text_Box_1Props = useStore((state)=>state["Home"]["Text_Box_1"]);
const Text_Box_1IoProps = useIoStore((state)=>state["Home"]["Text_Box_1"]);
const Text_Box_1Cb = useText_Box_1Cb()
const Text_Box_2Props = useStore((state)=>state["Home"]["Text_Box_2"]);
const Text_Box_2IoProps = useIoStore((state)=>state["Home"]["Text_Box_2"]);
const Text_Box_2Cb = useText_Box_2Cb()
const Para_BoxProps = useStore((state)=>state["Home"]["Para_Box"]);
const Para_BoxIoProps = useIoStore((state)=>state["Home"]["Para_Box"]);
const Para_BoxCb = usePara_BoxCb()
const BookProps = useStore((state)=>state["Home"]["Book"]);
const BookIoProps = useIoStore((state)=>state["Home"]["Book"]);
const BookCb = useBookCb()
const Download_CVProps = useStore((state)=>state["Home"]["Download_CV"]);
const Download_CVIoProps = useIoStore((state)=>state["Home"]["Download_CV"]);
const Download_CVCb = useDownload_CVCb()
const Image8Props = useStore((state)=>state["Home"]["Image8"]);
const Image8IoProps = useIoStore((state)=>state["Home"]["Image8"]);
const Image8Cb = useImage8Cb()
const Center_BoxProps = useStore((state)=>state["Home"]["Center_Box"]);
const Center_BoxIoProps = useIoStore((state)=>state["Home"]["Center_Box"]);
const Center_BoxCb = useCenter_BoxCb()
const Image12Props = useStore((state)=>state["Home"]["Image12"]);
const Image12IoProps = useIoStore((state)=>state["Home"]["Image12"]);
const Image12Cb = useImage12Cb()
const Image13Props = useStore((state)=>state["Home"]["Image13"]);
const Image13IoProps = useIoStore((state)=>state["Home"]["Image13"]);
const Image13Cb = useImage13Cb()
const Image14Props = useStore((state)=>state["Home"]["Image14"]);
const Image14IoProps = useIoStore((state)=>state["Home"]["Image14"]);
const Image14Cb = useImage14Cb()
const Image15Props = useStore((state)=>state["Home"]["Image15"]);
const Image15IoProps = useIoStore((state)=>state["Home"]["Image15"]);
const Image15Cb = useImage15Cb()
const ServicessProps = useStore((state)=>state["Home"]["Servicess"]);
const ServicessIoProps = useIoStore((state)=>state["Home"]["Servicess"]);
const ServicessCb = useServicessCb()
const Home_LineProps = useStore((state)=>state["Home"]["Home_Line"]);
const Home_LineIoProps = useIoStore((state)=>state["Home"]["Home_Line"]);
const Home_LineCb = useHome_LineCb()
const Home_Line_2Props = useStore((state)=>state["Home"]["Home_Line_2"]);
const Home_Line_2IoProps = useIoStore((state)=>state["Home"]["Home_Line_2"]);
const Home_Line_2Cb = useHome_Line_2Cb()
const Image20Props = useStore((state)=>state["Home"]["Image20"]);
const Image20IoProps = useIoStore((state)=>state["Home"]["Image20"]);
const Image20Cb = useImage20Cb()
const ExceptProps = useStore((state)=>state["Home"]["Except"]);
const ExceptIoProps = useIoStore((state)=>state["Home"]["Except"]);
const ExceptCb = useExceptCb()
const Para_1_GridProps = useStore((state)=>state["Home"]["Para_1_Grid"]);
const Para_1_GridIoProps = useIoStore((state)=>state["Home"]["Para_1_Grid"]);
const Para_1_GridCb = usePara_1_GridCb()
const UnorderedList4Props = useStore((state)=>state["Home"]["UnorderedList4"]);
const UnorderedList4IoProps = useIoStore((state)=>state["Home"]["UnorderedList4"]);
const UnorderedList4Cb = useUnorderedList4Cb()
const Image21Props = useStore((state)=>state["Home"]["Image21"]);
const Image21IoProps = useIoStore((state)=>state["Home"]["Image21"]);
const Image21Cb = useImage21Cb()
const AppsProps = useStore((state)=>state["Home"]["Apps"]);
const AppsIoProps = useIoStore((state)=>state["Home"]["Apps"]);
const AppsCb = useAppsCb()
const Para_2_GridProps = useStore((state)=>state["Home"]["Para_2_Grid"]);
const Para_2_GridIoProps = useIoStore((state)=>state["Home"]["Para_2_Grid"]);
const Para_2_GridCb = usePara_2_GridCb()
const UnorderedList3Props = useStore((state)=>state["Home"]["UnorderedList3"]);
const UnorderedList3IoProps = useIoStore((state)=>state["Home"]["UnorderedList3"]);
const UnorderedList3Cb = useUnorderedList3Cb()
const Image22Props = useStore((state)=>state["Home"]["Image22"]);
const Image22IoProps = useIoStore((state)=>state["Home"]["Image22"]);
const Image22Cb = useImage22Cb()
const WhatProps = useStore((state)=>state["Home"]["What"]);
const WhatIoProps = useIoStore((state)=>state["Home"]["What"]);
const WhatCb = useWhatCb()
const Para_3_DivProps = useStore((state)=>state["Home"]["Para_3_Div"]);
const Para_3_DivIoProps = useIoStore((state)=>state["Home"]["Para_3_Div"]);
const Para_3_DivCb = usePara_3_DivCb()
const UnorderedList2Props = useStore((state)=>state["Home"]["UnorderedList2"]);
const UnorderedList2IoProps = useIoStore((state)=>state["Home"]["UnorderedList2"]);
const UnorderedList2Cb = useUnorderedList2Cb()
const Project_HProps = useStore((state)=>state["Home"]["Project_H"]);
const Project_HIoProps = useIoStore((state)=>state["Home"]["Project_H"]);
const Project_HCb = useProject_HCb()
const First_LineProps = useStore((state)=>state["Home"]["First_Line"]);
const First_LineIoProps = useIoStore((state)=>state["Home"]["First_Line"]);
const First_LineCb = useFirst_LineCb()
const Second_LineProps = useStore((state)=>state["Home"]["Second_Line"]);
const Second_LineIoProps = useIoStore((state)=>state["Home"]["Second_Line"]);
const Second_LineCb = useSecond_LineCb()
const ViewProps = useStore((state)=>state["Home"]["View"]);
const ViewIoProps = useIoStore((state)=>state["Home"]["View"]);
const ViewCb = useViewCb()
const Image23Props = useStore((state)=>state["Home"]["Image23"]);
const Image23IoProps = useIoStore((state)=>state["Home"]["Image23"]);
const Image23Cb = useImage23Cb()
const BRANDProps = useStore((state)=>state["Home"]["BRAND"]);
const BRANDIoProps = useIoStore((state)=>state["Home"]["BRAND"]);
const BRANDCb = useBRANDCb()
const Blog_TextProps = useStore((state)=>state["Home"]["Blog_Text"]);
const Blog_TextIoProps = useIoStore((state)=>state["Home"]["Blog_Text"]);
const Blog_TextCb = useBlog_TextCb()
const SubProps = useStore((state)=>state["Home"]["Sub"]);
const SubIoProps = useIoStore((state)=>state["Home"]["Sub"]);
const SubCb = useSubCb()
const View_AllProps = useStore((state)=>state["Home"]["View_All"]);
const View_AllIoProps = useIoStore((state)=>state["Home"]["View_All"]);
const View_AllCb = useView_AllCb()
const UnorderedList6Props = useStore((state)=>state["Home"]["UnorderedList6"]);
const UnorderedList6IoProps = useIoStore((state)=>state["Home"]["UnorderedList6"]);
const UnorderedList6Cb = useUnorderedList6Cb()
const ProdProps = useStore((state)=>state["Home"]["Prod"]);
const ProdIoProps = useIoStore((state)=>state["Home"]["Prod"]);
const ProdCb = useProdCb()
const Prod_2Props = useStore((state)=>state["Home"]["Prod_2"]);
const Prod_2IoProps = useIoStore((state)=>state["Home"]["Prod_2"]);
const Prod_2Cb = useProd_2Cb()
const IntroProps = useStore((state)=>state["Home"]["Intro"]);
const IntroIoProps = useIoStore((state)=>state["Home"]["Intro"]);
const IntroCb = useIntroCb()
const FullProps = useStore((state)=>state["Home"]["Full"]);
const FullIoProps = useIoStore((state)=>state["Home"]["Full"]);
const FullCb = useFullCb()
const Full_2Props = useStore((state)=>state["Home"]["Full_2"]);
const Full_2IoProps = useIoStore((state)=>state["Home"]["Full_2"]);
const Full_2Cb = useFull_2Cb()
const Half_pProps = useStore((state)=>state["Home"]["Half_p"]);
const Half_pIoProps = useIoStore((state)=>state["Home"]["Half_p"]);
const Half_pCb = useHalf_pCb()
const UnorderedList7Props = useStore((state)=>state["Home"]["UnorderedList7"]);
const UnorderedList7IoProps = useIoStore((state)=>state["Home"]["UnorderedList7"]);
const UnorderedList7Cb = useUnorderedList7Cb()
const Text_LProps = useStore((state)=>state["Home"]["Text_L"]);
const Text_LIoProps = useIoStore((state)=>state["Home"]["Text_L"]);
const Text_LCb = useText_LCb()
const UnorderedList8Props = useStore((state)=>state["Home"]["UnorderedList8"]);
const UnorderedList8IoProps = useIoStore((state)=>state["Home"]["UnorderedList8"]);
const UnorderedList8Cb = useUnorderedList8Cb()
const Text_EProps = useStore((state)=>state["Home"]["Text_E"]);
const Text_EIoProps = useIoStore((state)=>state["Home"]["Text_E"]);
const Text_ECb = useText_ECb()
const HeadingProps = useStore((state)=>state["Home"]["Heading"]);
const HeadingIoProps = useIoStore((state)=>state["Home"]["Heading"]);
const HeadingCb = useHeadingCb()
const SubsProps = useStore((state)=>state["Home"]["Subs"]);
const SubsIoProps = useIoStore((state)=>state["Home"]["Subs"]);
const SubsCb = useSubsCb()
const PersonProps = useStore((state)=>state["Home"]["Person"]);
const PersonIoProps = useIoStore((state)=>state["Home"]["Person"]);
const PersonCb = usePersonCb()
const LogoProps = useStore((state)=>state["Home"]["Logo"]);
const LogoIoProps = useIoStore((state)=>state["Home"]["Logo"]);
const LogoCb = useLogoCb()
const Start_TextProps = useStore((state)=>state["Home"]["Start_Text"]);
const Start_TextIoProps = useIoStore((state)=>state["Home"]["Start_Text"]);
const Start_TextCb = useStart_TextCb()
const AuthorProps = useStore((state)=>state["Home"]["Author"]);
const AuthorIoProps = useIoStore((state)=>state["Home"]["Author"]);
const AuthorCb = useAuthorCb()
const PositionProps = useStore((state)=>state["Home"]["Position"]);
const PositionIoProps = useIoStore((state)=>state["Home"]["Position"]);
const PositionCb = usePositionCb()
const FAQProps = useStore((state)=>state["Home"]["FAQ"]);
const FAQIoProps = useIoStore((state)=>state["Home"]["FAQ"]);
const FAQCb = useFAQCb()
const DescProps = useStore((state)=>state["Home"]["Desc"]);
const DescIoProps = useIoStore((state)=>state["Home"]["Desc"]);
const DescCb = useDescCb()
const UnorderedList9Props = useStore((state)=>state["Home"]["UnorderedList9"]);
const UnorderedList9IoProps = useIoStore((state)=>state["Home"]["UnorderedList9"]);
const UnorderedList9Cb = useUnorderedList9Cb()
const UnorderedList10Props = useStore((state)=>state["Home"]["UnorderedList10"]);
const UnorderedList10IoProps = useIoStore((state)=>state["Home"]["UnorderedList10"]);
const UnorderedList10Cb = useUnorderedList10Cb()
const Head_CProps = useStore((state)=>state["Home"]["Head_C"]);
const Head_CIoProps = useIoStore((state)=>state["Home"]["Head_C"]);
const Head_CCb = useHead_CCb()
const SubHProps = useStore((state)=>state["Home"]["SubH"]);
const SubHIoProps = useIoStore((state)=>state["Home"]["SubH"]);
const SubHCb = useSubHCb()
const HomeIProps = useStore((state)=>state["Home"]["HomeI"]);
const HomeIIoProps = useIoStore((state)=>state["Home"]["HomeI"]);
const HomeICb = useHomeICb()
const addProps = useStore((state)=>state["Home"]["add"]);
const addIoProps = useIoStore((state)=>state["Home"]["add"]);
const addCb = useaddCb()
const EmailProps = useStore((state)=>state["Home"]["Email"]);
const EmailIoProps = useIoStore((state)=>state["Home"]["Email"]);
const EmailCb = useEmailCb()
const ALProps = useStore((state)=>state["Home"]["AL"]);
const ALIoProps = useIoStore((state)=>state["Home"]["AL"]);
const ALCb = useALCb()
const SEProps = useStore((state)=>state["Home"]["SE"]);
const SEIoProps = useIoStore((state)=>state["Home"]["SE"]);
const SECb = useSECb()
const EXProps = useStore((state)=>state["Home"]["EX"]);
const EXIoProps = useIoStore((state)=>state["Home"]["EX"]);
const EXCb = useEXCb()
const COProps = useStore((state)=>state["Home"]["CO"]);
const COIoProps = useIoStore((state)=>state["Home"]["CO"]);
const COCb = useCOCb()
const DRProps = useStore((state)=>state["Home"]["DR"]);
const DRIoProps = useIoStore((state)=>state["Home"]["DR"]);
const DRCb = useDRCb()
const TWProps = useStore((state)=>state["Home"]["TW"]);
const TWIoProps = useIoStore((state)=>state["Home"]["TW"]);
const TWCb = useTWCb()
const INProps = useStore((state)=>state["Home"]["IN"]);
const INIoProps = useIoStore((state)=>state["Home"]["IN"]);
const INCb = useINCb()
const BLProps = useStore((state)=>state["Home"]["BL"]);
const BLIoProps = useIoStore((state)=>state["Home"]["BL"]);
const BLCb = useBLCb()
const PRProps = useStore((state)=>state["Home"]["PR"]);
const PRIoProps = useIoStore((state)=>state["Home"]["PR"]);
const PRCb = usePRCb()
const CpyProps = useStore((state)=>state["Home"]["Cpy"]);
const CpyIoProps = useIoStore((state)=>state["Home"]["Cpy"]);
const CpyCb = useCpyCb()

  return (<>
  <Div className="p-Home Navbar bpt" {...NavbarProps} {...NavbarCb} {...NavbarIoProps}>
<Image className="p-Home Home_Logo bpt" {...Home_LogoProps} {...Home_LogoCb} {...Home_LogoIoProps}/>
<Link className="p-Home Call bpt" {...CallProps} {...CallCb} {...CallIoProps}/>
<Link className="p-Home Blog bpt" {...BlogProps} {...BlogCb} {...BlogIoProps}/>
<Link className="p-Home Project bpt" {...ProjectProps} {...ProjectCb} {...ProjectIoProps}/>
<Link className="p-Home Services bpt" {...ServicesProps} {...ServicesCb} {...ServicesIoProps}/>
<Link className="p-Home About bpt" {...AboutProps} {...AboutCb} {...AboutIoProps}/>
</Div>
<Div className="p-Home Main_Div bpt" {...Main_DivProps} {...Main_DivCb} {...Main_DivIoProps}>
<Div className="p-Home Home_Div bpt" {...Home_DivProps} {...Home_DivCb} {...Home_DivIoProps}>
<Flex className="p-Home Flex4 bpt" {...Flex4Props} {...Flex4Cb} {...Flex4IoProps}>
<Image className="p-Home Image8 bpt" {...Image8Props} {...Image8Cb} {...Image8IoProps}/>
</Flex>
<Div className="p-Home Home_Div_Left bpt" {...Home_Div_LeftProps} {...Home_Div_LeftCb} {...Home_Div_LeftIoProps}>
<TextBox className="p-Home Text_Box_1 bpt" {...Text_Box_1Props} {...Text_Box_1Cb} {...Text_Box_1IoProps}/>
<TextBox className="p-Home Text_Box_2 bpt" {...Text_Box_2Props} {...Text_Box_2Cb} {...Text_Box_2IoProps}/>
<TextBox className="p-Home Para_Box bpt" {...Para_BoxProps} {...Para_BoxCb} {...Para_BoxIoProps}/>
<Button className="p-Home Book bpt" {...BookProps} {...BookCb} {...BookIoProps}/>
<Link className="p-Home Download_CV bpt" {...Download_CVProps} {...Download_CVCb} {...Download_CVIoProps}/>
</Div>
</Div>
</Div>
<Div className="p-Home Main_Div_2 bpt" {...Main_Div_2Props} {...Main_Div_2Cb} {...Main_Div_2IoProps}>
<Div className="p-Home Second_Div bpt" {...Second_DivProps} {...Second_DivCb} {...Second_DivIoProps}>
<Div className="p-Home Image_Div bpt" {...Image_DivProps} {...Image_DivCb} {...Image_DivIoProps}>
<TextBox className="p-Home Center_Box bpt" {...Center_BoxProps} {...Center_BoxCb} {...Center_BoxIoProps}/>
</Div>
</Div>
</Div>
<Div className="p-Home Div22 bpt" {...Div22Props} {...Div22Cb} {...Div22IoProps}>
<Image className="p-Home Image15 bpt" {...Image15Props} {...Image15Cb} {...Image15IoProps}/>
<Image className="p-Home Image14 bpt" {...Image14Props} {...Image14Cb} {...Image14IoProps}/>
<Image className="p-Home Image13 bpt" {...Image13Props} {...Image13Cb} {...Image13IoProps}/>
<Image className="p-Home Image12 bpt" {...Image12Props} {...Image12Cb} {...Image12IoProps}/>
</Div>
<Div className="p-Home SErvices bpt" {...SErvicesProps} {...SErvicesCb} {...SErvicesIoProps}>
<TextBox className="p-Home Servicess bpt" {...ServicessProps} {...ServicessCb} {...ServicessIoProps}/>
<TextBox className="p-Home Home_Line bpt" {...Home_LineProps} {...Home_LineCb} {...Home_LineIoProps}/>
<TextBox className="p-Home Home_Line_2 bpt" {...Home_Line_2Props} {...Home_Line_2Cb} {...Home_Line_2IoProps}/>
</Div>
<Div className="p-Home Grid bpt" {...GridProps} {...GridCb} {...GridIoProps}>
<Div className="p-Home Third_DIv_Grid bpt" {...Third_DIv_GridProps} {...Third_DIv_GridCb} {...Third_DIv_GridIoProps}>
<Image className="p-Home Image22 bpt" {...Image22Props} {...Image22Cb} {...Image22IoProps}/>
<TextBox className="p-Home What bpt" {...WhatProps} {...WhatCb} {...WhatIoProps}/>
<TextBox className="p-Home Para_3_Div bpt" {...Para_3_DivProps} {...Para_3_DivCb} {...Para_3_DivIoProps}/>
<UnorderedList className="p-Home UnorderedList2 bpt" {...UnorderedList2Props} {...UnorderedList2Cb} {...UnorderedList2IoProps}/>
</Div>
<Div className="p-Home Secod_Div_Grid bpt" {...Secod_Div_GridProps} {...Secod_Div_GridCb} {...Secod_Div_GridIoProps}>
<Image className="p-Home Image21 bpt" {...Image21Props} {...Image21Cb} {...Image21IoProps}/>
<TextBox className="p-Home Apps bpt" {...AppsProps} {...AppsCb} {...AppsIoProps}/>
<TextBox className="p-Home Para_2_Grid bpt" {...Para_2_GridProps} {...Para_2_GridCb} {...Para_2_GridIoProps}/>
<UnorderedList className="p-Home UnorderedList3 bpt" {...UnorderedList3Props} {...UnorderedList3Cb} {...UnorderedList3IoProps}/>
</Div>
<Div className="p-Home First_Div_Grid bpt" {...First_Div_GridProps} {...First_Div_GridCb} {...First_Div_GridIoProps}>
<Image className="p-Home Image20 bpt" {...Image20Props} {...Image20Cb} {...Image20IoProps}/>
<TextBox className="p-Home Except bpt" {...ExceptProps} {...ExceptCb} {...ExceptIoProps}/>
<TextBox className="p-Home Para_1_Grid bpt" {...Para_1_GridProps} {...Para_1_GridCb} {...Para_1_GridIoProps}/>
<UnorderedList className="p-Home UnorderedList4 bpt" {...UnorderedList4Props} {...UnorderedList4Cb} {...UnorderedList4IoProps}/>
</Div>
</Div>
<Div className="p-Home Proj bpt" {...ProjProps} {...ProjCb} {...ProjIoProps}>
<TextBox className="p-Home Project_H bpt" {...Project_HProps} {...Project_HCb} {...Project_HIoProps}/>
<Button className="p-Home View bpt" {...ViewProps} {...ViewCb} {...ViewIoProps}/>
<TextBox className="p-Home First_Line bpt" {...First_LineProps} {...First_LineCb} {...First_LineIoProps}/>
<TextBox className="p-Home Second_Line bpt" {...Second_LineProps} {...Second_LineCb} {...Second_LineIoProps}/>
<Div className="p-Home Slider bpt" {...SliderProps} {...SliderCb} {...SliderIoProps}>
<Div className="p-Home Main_Slider bpt" {...Main_SliderProps} {...Main_SliderCb} {...Main_SliderIoProps}>
<Image className="p-Home Image23 bpt" {...Image23Props} {...Image23Cb} {...Image23IoProps}/>
<Div className="p-Home Div37 bpt" {...Div37Props} {...Div37Cb} {...Div37IoProps}>
<TextBox className="p-Home BRAND bpt" {...BRANDProps} {...BRANDCb} {...BRANDIoProps}/>
</Div>
</Div>
</Div>
</Div>
<Div className="p-Home Blog_D bpt" {...Blog_DProps} {...Blog_DCb} {...Blog_DIoProps}>
<Flex className="p-Home Blog_Flex bpt" {...Blog_FlexProps} {...Blog_FlexCb} {...Blog_FlexIoProps}>
<Div className="p-Home Sub_Heading bpt" {...Sub_HeadingProps} {...Sub_HeadingCb} {...Sub_HeadingIoProps}>
<TextBox className="p-Home Blog_Text bpt" {...Blog_TextProps} {...Blog_TextCb} {...Blog_TextIoProps}/>
<TextBox className="p-Home Sub bpt" {...SubProps} {...SubCb} {...SubIoProps}/>
<Link className="p-Home View_All bpt" {...View_AllProps} {...View_AllCb} {...View_AllIoProps}/>
</Div>
<Div className="p-Home Sub_Heading_2 bpt" {...Sub_Heading_2Props} {...Sub_Heading_2Cb} {...Sub_Heading_2IoProps}>
<UnorderedList className="p-Home UnorderedList6 bpt" {...UnorderedList6Props} {...UnorderedList6Cb} {...UnorderedList6IoProps}/>
</Div>
</Flex>
</Div>
<Div className="p-Home Designer bpt" {...DesignerProps} {...DesignerCb} {...DesignerIoProps}>
<Flex className="p-Home Product_Flex bpt" {...Product_FlexProps} {...Product_FlexCb} {...Product_FlexIoProps}>
<Div className="p-Home Half_1 bpt" {...Half_1Props} {...Half_1Cb} {...Half_1IoProps}>
<TextBox className="p-Home Prod bpt" {...ProdProps} {...ProdCb} {...ProdIoProps}/>
<TextBox className="p-Home Prod_2 bpt" {...Prod_2Props} {...Prod_2Cb} {...Prod_2IoProps}/>
</Div>
<Div className="p-Home Half_2 bpt" {...Half_2Props} {...Half_2Cb} {...Half_2IoProps}>
<TextBox className="p-Home Intro bpt" {...IntroProps} {...IntroCb} {...IntroIoProps}/>
</Div>
</Flex>
<Div className="p-Home Image_Grid bpt" {...Image_GridProps} {...Image_GridCb} {...Image_GridIoProps}>
<Div className="p-Home Image1 bpt" {...Image1Props} {...Image1Cb} {...Image1IoProps}>
<Image className="p-Home Full bpt" {...FullProps} {...FullCb} {...FullIoProps}/>
</Div>
<Div className="p-Home Image2 bpt" {...Image2Props} {...Image2Cb} {...Image2IoProps}>
<Image className="p-Home Full_2 bpt" {...Full_2Props} {...Full_2Cb} {...Full_2IoProps}/>
</Div>
<Div className="p-Home Image4 bpt" {...Image4Props} {...Image4Cb} {...Image4IoProps}>
<Image className="p-Home Half_p bpt" {...Half_pProps} {...Half_pCb} {...Half_pIoProps}/>
</Div>
</Div>
</Div>
<Div className="p-Home Education bpt" {...EducationProps} {...EducationCb} {...EducationIoProps}>
<Flex className="p-Home Education_Flex bpt" {...Education_FlexProps} {...Education_FlexCb} {...Education_FlexIoProps}>
<Div className="p-Home Educ bpt" {...EducProps} {...EducCb} {...EducIoProps}>
<Div className="p-Home Learning bpt" {...LearningProps} {...LearningCb} {...LearningIoProps}>
<TextBox className="p-Home Text_L bpt" {...Text_LProps} {...Text_LCb} {...Text_LIoProps}/>
</Div>
<UnorderedList className="p-Home UnorderedList7 bpt" {...UnorderedList7Props} {...UnorderedList7Cb} {...UnorderedList7IoProps}/>
</Div>
<Div className="p-Home Exp bpt" {...ExpProps} {...ExpCb} {...ExpIoProps}>
<Div className="p-Home Exp_1 bpt" {...Exp_1Props} {...Exp_1Cb} {...Exp_1IoProps}>
<TextBox className="p-Home Text_E bpt" {...Text_EProps} {...Text_ECb} {...Text_EIoProps}/>
</Div>
<UnorderedList className="p-Home UnorderedList8 bpt" {...UnorderedList8Props} {...UnorderedList8Cb} {...UnorderedList8IoProps}/>
</Div>
</Flex>
</Div>
<Div className="p-Home Testimonial bpt" {...TestimonialProps} {...TestimonialCb} {...TestimonialIoProps}>
<Div className="p-Home Test_1 bpt" {...Test_1Props} {...Test_1Cb} {...Test_1IoProps}>
<TextBox className="p-Home Heading bpt" {...HeadingProps} {...HeadingCb} {...HeadingIoProps}/>
<TextBox className="p-Home Subs bpt" {...SubsProps} {...SubsCb} {...SubsIoProps}/>
</Div>
<Flex className="p-Home Test_2 bpt" {...Test_2Props} {...Test_2Cb} {...Test_2IoProps}>
<Div className="p-Home Div64 bpt" {...Div64Props} {...Div64Cb} {...Div64IoProps}>
<Image className="p-Home Person bpt" {...PersonProps} {...PersonCb} {...PersonIoProps}/>
</Div>
<Div className="p-Home Div65 bpt" {...Div65Props} {...Div65Cb} {...Div65IoProps}>
<Image className="p-Home Logo bpt" {...LogoProps} {...LogoCb} {...LogoIoProps}/>
<TextBox className="p-Home Start_Text bpt" {...Start_TextProps} {...Start_TextCb} {...Start_TextIoProps}/>
<TextBox className="p-Home Author bpt" {...AuthorProps} {...AuthorCb} {...AuthorIoProps}/>
<TextBox className="p-Home Position bpt" {...PositionProps} {...PositionCb} {...PositionIoProps}/>
</Div>
</Flex>
</Div>
<Div className="p-Home Footer bpt" {...FooterProps} {...FooterCb} {...FooterIoProps}>
<Flex className="p-Home Major_Flex_1 bpt" {...Major_Flex_1Props} {...Major_Flex_1Cb} {...Major_Flex_1IoProps}>
<Div className="p-Home Heading_F bpt" {...Heading_FProps} {...Heading_FCb} {...Heading_FIoProps}>
<TextBox className="p-Home FAQ bpt" {...FAQProps} {...FAQCb} {...FAQIoProps}/>
<TextBox className="p-Home Desc bpt" {...DescProps} {...DescCb} {...DescIoProps}/>
</Div>
</Flex>
<Flex className="p-Home Grids bpt" {...GridsProps} {...GridsCb} {...GridsIoProps}>
<Flex className="p-Home Flex_Body bpt" {...Flex_BodyProps} {...Flex_BodyCb} {...Flex_BodyIoProps}>
<UnorderedList className="p-Home UnorderedList9 bpt" {...UnorderedList9Props} {...UnorderedList9Cb} {...UnorderedList9IoProps}/>
<UnorderedList className="p-Home UnorderedList10 bpt" {...UnorderedList10Props} {...UnorderedList10Cb} {...UnorderedList10IoProps}/>
</Flex>
</Flex>
</Div>
<Div className="p-Home Contact bpt" {...ContactProps} {...ContactCb} {...ContactIoProps}>
<Flex className="p-Home CFlex bpt" {...CFlexProps} {...CFlexCb} {...CFlexIoProps}>
<Div className="p-Home CFlex_1 bpt" {...CFlex_1Props} {...CFlex_1Cb} {...CFlex_1IoProps}>
<TextBox className="p-Home Head_C bpt" {...Head_CProps} {...Head_CCb} {...Head_CIoProps}/>
<TextBox className="p-Home SubH bpt" {...SubHProps} {...SubHCb} {...SubHIoProps}/>
</Div>
<Flex className="p-Home CFlex_2 bpt" {...CFlex_2Props} {...CFlex_2Cb} {...CFlex_2IoProps}>
<Div className="p-Home Add bpt" {...AddProps} {...AddCb} {...AddIoProps}>
<Image className="p-Home HomeI bpt" {...HomeIProps} {...HomeICb} {...HomeIIoProps}/>
<TextBox className="p-Home add bpt" {...addProps} {...addCb} {...addIoProps}/>
<TextBox className="p-Home Email bpt" {...EmailProps} {...EmailCb} {...EmailIoProps}/>
</Div>
<Div className="p-Home CGrid bpt" {...CGridProps} {...CGridCb} {...CGridIoProps}>
<Link className="p-Home AL bpt" {...ALProps} {...ALCb} {...ALIoProps}/>
<Link className="p-Home SE bpt" {...SEProps} {...SECb} {...SEIoProps}/>
<Link className="p-Home CO bpt" {...COProps} {...COCb} {...COIoProps}/>
<Link className="p-Home BL bpt" {...BLProps} {...BLCb} {...BLIoProps}/>
<Link className="p-Home PR bpt" {...PRProps} {...PRCb} {...PRIoProps}/>
<Link className="p-Home EX bpt" {...EXProps} {...EXCb} {...EXIoProps}/>
<Link className="p-Home DR bpt" {...DRProps} {...DRCb} {...DRIoProps}/>
<Link className="p-Home IN bpt" {...INProps} {...INCb} {...INIoProps}/>
<Link className="p-Home TW bpt" {...TWProps} {...TWCb} {...TWIoProps}/>
</Div>
</Flex>
<Div className="p-Home CFlex_3 bpt" {...CFlex_3Props} {...CFlex_3Cb} {...CFlex_3IoProps}>
<Div className="p-Home SC3 bpt" {...SC3Props} {...SC3Cb} {...SC3IoProps}>
<TextBox className="p-Home Cpy bpt" {...CpyProps} {...CpyCb} {...CpyIoProps}/>
</Div>
</Div>
</Flex>
</Div>
  </>);
}
