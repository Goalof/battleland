import React from "react";
import theme from "theme";
import { Theme, Text, Box, Button, Image, Link, Icon } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { Override, Section, StackItem, Stack, GoogleMap, SocialMedia } from "@quarkly/components";
import * as Components from "components";
import { FaMapMarkerAlt, FaPhoneVolume } from "react-icons/fa";
export default (() => {
	return <Theme theme={theme}>
		<Helmet>
			<title>
				Quarkly export
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Components.Header2 />
		<Section background="linear-gradient(180deg,rgba(0, 0, 0, 0) 0%,rgba(14, 14, 14, 0.96) 96.2%),url(https://uploads.quarkly.io/5f98119ab40b56001e9525d8/images/hero-background.png?v=2020-10-27T12:47:41.306Z) center 94%/contain no-repeat,--color-background" padding="90px 0 780px 0" lg-padding="90px 0 600px 0" sm-padding="90px 0 320px 0">
			<Override
				slot="SectionContent"
				max-width="1170px"
				flex-wrap="wrap"
				flex-direction="column"
				align-items="center"
				justify-content="center"
			/>
			<Box width="100%" display="flex" flex-direction="column" align-items="center">
				<Text
					text-align="center"
					font="--headline1"
					color="#ffffff"
					margin="0px 0px 0px 0px"
					sm-font="normal 500 52px/62px Inter, sans-serif"
				>
					Work
				</Text>
				<Components.Textloop
					text-align="center"
					color="--biruza"
					font="--headline1"
					list="fast,smart,effectively,on the team,independently"
					sm-font="normal 500 52px/62px Inter, sans-serif"
				/>
				<Text
					font="--lead"
					text-align="center"
					color="#ffffff"
					margin="37px 0px 70px 0px"
					sm-width="80%"
					sm-font="normal 400 16px/23px Inter, sans-serif"
				>
					Most calendars are designed for teams. Slate is designed for{" "}
					<br />
					freelancers who want a simple way to plan their schedule.{"\n\n"}
				</Text>
			</Box>
			<Box
				width="100%"
				display="flex"
				align-items="center"
				justify-content="center"
				sm-flex-direction="column"
			>
				<Button
					font="normal 500 17px/24px --fontFamily-googleInter"
					background="--color-blue"
					border-width="0px"
					border-radius="0px"
					padding="20px 40px 20px 40px"
					margin="0px 10px 0px 0px"
					box-shadow="0px 4px 31px rgba(0, 0, 0, 0.15)"
					hover-transform="translateY(-10px)"
					transition="all 3s ease 0s"
					sm-margin="0px 0px 10px 0px"
				>
					Try For Free{"\n\n"}
				</Button>
				<Button
					font="normal 500 17px/24px --fontFamily-googleInter"
					background="rgba(0, 119, 204, 0)"
					border-width="1px"
					border-style="solid"
					border-color="#ffffff"
					border-radius="0px"
					padding="20px 40px 20px 40px"
					margin="0px 0px 0px 10px"
					filter="drop-shadow(0px 4px 31px rgba(0, 0, 0, 0.15))"
					hover-transform="translateY(-10px)"
					sm-margin="10px 0px 10px 0px"
				>
					Learn More{"\n\n"}
				</Button>
			</Box>
		</Section>
		<Section background="--color-background" padding="90px 0 90px 0">
			<Override
				slot="SectionContent"
				max-width="1170px"
				flex-wrap="wrap"
				flex-direction="column"
				align-items="center"
				justify-content="center"
			/>
			<Box
				width="100%"
				display="flex"
				flex-direction="column"
				align-items="center"
				flex-wrap="wrap"
			>
				<Text
					text-align="center"
					font="--headline2"
					color="#ffffff"
					margin="0px 0px 0px 0px"
					sm-font="normal 400 36px/54px Inter, sans-serif"
				>
					Features{"\n\n"}
				</Text>
				<Text
					text-align="center"
					font="--lead"
					color="#ffffff"
					margin="27px 0px 70px 0px"
					sm-width="80%"
					sm-font="normal 400 16px/23px Inter, sans-serif"
				>
					Most calendars are designed for teams. Slate is designed for{" "}
					<br />
					freelancers who want a simple way to plan their schedule.{"\n\n\n\n"}
				</Text>
				<Box display="flex" width="100%" flex-wrap="wrap">
					<Box
						width="70%"
						display="flex"
						position="relative"
						z-index="1"
						lg-width="100%"
						lg-margin="0px 0px 150px 0px"
						sm-margin="0px 0px 80px 0px"
					>
						<Image
							max-height="276px"
							src="https://uploads.quarkly.io/5f98119ab40b56001e9525d8/images/features-image-2.png?v=2020-10-27T12:57:08.425Z"
							srcSet="https://uploads.quarkly.io/5f98119ab40b56001e9525d8/images/features-image-2-2x.png?v=2020-10-27T12:57:38.819Z 2x"
							position="absolute"
							z-index="2"
							bottom="0px"
							left="auto"
							top="auto"
							right="0px"
							lg-bottom="-95px"
							lg-height="274px"
							lg-left="auto"
							lg-right="138px"
							lg-top="auto"
							lg-width="398px"
							sm-max-height="160px"
							sm-bottom="-42px"
							sm-height="160px"
							sm-left="auto"
							sm-right="-56px"
							sm-top="auto"
							sm-width="398px"
						/>
						<Image src="https://uploads.quarkly.io/5f98119ab40b56001e9525d8/images/features-image-1.png?v=2020-10-27T12:55:36.298Z" srcSet="https://uploads.quarkly.io/5f98119ab40b56001e9525d8/images/features-image-1-2x.png?v=2020-10-27T12:55:49.119Z 2x" max-height="659px" lg-width="100%" />
						<Components.Imgloop
							width="190px"
							height="190px"
							position="absolute"
							z-index="2"
							bottom="70px"
							left="17px"
							right="auto"
							top="auto"
							lg-bottom="31px"
							lg-left="128px"
							lg-right="auto"
							lg-top="auto"
							sm-width="120px"
							sm-height="120px"
							sm-bottom="35px"
							sm-left="20px"
							sm-right="auto"
							sm-top="auto"
						/>
					</Box>
					<Box
						width="25%"
						display="flex"
						flex-direction="column"
						margin="0px 0px 0px 5%"
						lg-width="100%"
						lg-flex-wrap="wrap"
						lg-flex-direction="row"
						lg-margin="0px 0px 0px 0%"
					>
						<Box lg-width="33.333%" sm-width="100%">
							<Image src="https://uploads.quarkly.io/5f98119ab40b56001e9525d8/images/icon-round-restaurant-menu.svg?v=2020-10-27T12:52:39.916Z" width="24px" height="24px" />
							<Text font="--lead" color="#ffffff" margin="23px 0px 0px 0px">
								A single source of truth{"\n\n"}
							</Text>
							<Text font="--base" color="#ffffff" margin="20px 0px 47px 0px">
								When you add work to your{" "}
								<br />
								Slate calendar we automatically{" "}
								<br />
								calculate useful insights{" "}
								<br />
								<br />
								{"\n\n\n\n"}
							</Text>
						</Box>
						<Box lg-width="33.333%" sm-width="100%">
							<Image src="https://uploads.quarkly.io/5f98119ab40b56001e9525d8/images/icon-alien-outline.svg?v=2020-10-27T12:54:02.190Z" width="24px" height="24px" />
							<Text font="--lead" color="#ffffff" margin="23px 0px 0px 0px">
								Intuitive interface{"\n\n\n\n\n\n"}
							</Text>
							<Text font="--base" color="#ffffff" margin="20px 0px 47px 0px">
								When you add work to your{" "}
								<br />
								Slate calendar we automatically{" "}
								<br />
								calculate useful insights
								<br />
								<br />
								{"\n\n\n\n"}
							</Text>
						</Box>
						<Box lg-width="33.333%" sm-width="100%">
							<Image src="https://uploads.quarkly.io/5f98119ab40b56001e9525d8/images/icon-all-inclusive.svg?v=2020-10-27T12:53:54.237Z" width="24px" height="24px" />
							<Text font="--lead" color="#ffffff" margin="23px 0px 0px 0px">
								Or with rules{"\n\n\n\n"}
							</Text>
							<Text font="--base" color="#ffffff" margin="20px 0px 0px 0px">
								When you add work to your{" "}
								<br />
								Slate calendar we automatically{" "}
								<br />
								calculate useful insights{" "}
								<br />
								{"\n\n\n\n"}
							</Text>
						</Box>
					</Box>
				</Box>
			</Box>
		</Section>
		<Section background="--color-background" padding="90px 0 90px 0">
			<Override
				slot="SectionContent"
				max-width="1170px"
				flex-wrap="wrap"
				flex-direction="column"
				align-items="center"
				justify-content="center"
			/>
			<Box
				width="100%"
				display="flex"
				flex-direction="column"
				align-items="center"
				flex-wrap="wrap"
			>
				<Text
					text-align="center"
					font="--headline2"
					color="#ffffff"
					margin="0px 0px 0px 0px"
					sm-font="normal 400 36px/54px Inter, sans-serif"
				>
					Contents{"\n\n"}
				</Text>
				<Text text-align="center" font="--lead" color="#ffffff" margin="27px 0px 70px 0px">
					We focus on ergonomics and meeting you where you work.{" "}
					<br />
					It's only a keystroke away.{"\n\n"}
				</Text>
				<Box display="flex" width="100%" flex-wrap="wrap">
					<Box
						width="50%"
						padding="0px 0px 0px 15px0px"
						display="flex"
						flex-wrap="wrap"
						sm-width="100%"
					>
						<Box
							width="100%"
							display="flex"
							position="relative"
							z-index="1"
							flex-direction="column"
							align-items="center"
							justify-content="center"
							background="#ffffff"
							border-radius="10px"
							box-shadow="0px 4px 31px rgba(0, 0, 0, 0.15)"
							margin="15px 15px 15px 15px"
						>
							<Text font="normal 500 20px/30px --fontFamily-googleInter" color="rgba(0, 0, 0, 1)" margin="50px 0px 0px 0px">
								Work{"\n\n"}
							</Text>
							<Text font="--base" color="rgba(92, 92, 92, 1)" text-align="center" margin="30px 0px 40px 0px">
								Ever wondered if you're too reliant{" "}
								<br />
								on a client for work? Slate helps{" "}
								<br />
								you identify .{"\n\n"}
							</Text>
							<Button
								font="normal 500 17px/24px --fontFamily-googleInter"
								background="--color-blue"
								border-width="0px"
								border-radius="0px"
								padding="13.5px 40px 13.5px 46px"
								margin="0px 10px 50px 0px"
								box-shadow="0px 4px 31px rgba(0, 0, 0, 0.15)"
								hover-transform="translateY(-10px)"
								transition="all 3s ease 0s"
							>
								Sign Up{"\n\n"}
							</Button>
							<Image margin="0px 0px 40px 0px" src="https://uploads.quarkly.io/5f98119ab40b56001e9525d8/images/content-laptop.png?v=2020-10-27T13:26:23.752Z" sm-width="80%" />
						</Box>
					</Box>
					<Box
						width="50%"
						padding="0px 0px 0px 15px0px"
						display="flex"
						flex-wrap="wrap"
						sm-width="100%"
					>
						<Box
							width="100%"
							display="flex"
							position="relative"
							z-index="1"
							flex-direction="column"
							align-items="center"
							justify-content="center"
							background="#ffffff"
							border-radius="10px"
							box-shadow="0px 4px 31px rgba(0, 0, 0, 0.15)"
							margin="15px 15px 15px 15px"
						>
							<Text font="normal 500 20px/30px --fontFamily-googleInter" color="rgba(0, 0, 0, 1)" margin="50px 0px 0px 0px">
								Work{"\n\n"}
							</Text>
							<Text font="--base" color="rgba(92, 92, 92, 1)" text-align="center" margin="30px 0px 40px 0px">
								Ever wondered if you're too reliant{" "}
								<br />
								on a client for work? Slate helps{" "}
								<br />
								you identify .{"\n\n"}
							</Text>
							<Button
								font="normal 500 17px/24px --fontFamily-googleInter"
								background="--color-blue"
								border-width="0px"
								border-radius="0px"
								padding="13.5px 40px 13.5px 46px"
								margin="0px 10px 50px 0px"
								box-shadow="0px 4px 31px rgba(0, 0, 0, 0.15)"
								hover-transform="translateY(-10px)"
								transition="all 3s ease 0s"
							>
								Sign Up{"\n\n"}
							</Button>
							<Image margin="0px 0px 40px 0px" src="https://uploads.quarkly.io/5f98119ab40b56001e9525d8/images/content-laptop.png?v=2020-10-27T13:26:23.752Z" sm-width="80%" />
						</Box>
					</Box>
				</Box>
			</Box>
		</Section>
		<Section background="--color-background" padding="90px 0 90px 0">
			<Override
				slot="SectionContent"
				max-width="1170px"
				flex-wrap="wrap"
				flex-direction="column"
				align-items="center"
				justify-content="center"
			/>
			<Box
				width="100%"
				display="flex"
				flex-direction="column"
				align-items="center"
				flex-wrap="wrap"
			>
				<Text
					text-align="center"
					font="--headline2"
					color="#ffffff"
					margin="0px 0px 0px 0px"
					sm-font="normal 400 36px/54px Inter, sans-serif"
				>
					Gallery{"\n\n"}
				</Text>
				<Text text-align="center" font="--lead" color="#ffffff" margin="27px 0px 70px 0px">
					We focus on ergonomics and meeting you where you work.{" "}
					<br />
					It's only a keystroke away.{"\n\n\n\n\n\n"}
				</Text>
				<Stack width="100%" margin="0px 0px 0px 0px">
					{"    "}
					<StackItem width="50%" display="flex" lg-width="100%">
						<Image
							src="https://uploads.quarkly.io/5f98119ab40b56001e9525d8/images/gallery-image-1.png?v=2020-10-27T13:56:01.503Z"
							object-fit="fill"
							box-shadow="0px 4px 31px rgba(0, 0, 0, 0.15)"
							border-radius="12px"
							max-height="594px"
							width="100%"
							lg-max-height="403px"
						/>
						{"        "}{"    "}
					</StackItem>
					<StackItem width="50%" display="flex" lg-width="100%">
						<Stack margin="0px 0px 0px 0px" gap="0px">
							{"    "}
							<StackItem width="100%" display="flex" lg-width="50%">
								<Override slot="StackItemContent" lg-padding="0px 8px 16px 0px" />
								{"        "}
								<Image
									src="https://uploads.quarkly.io/5f98119ab40b56001e9525d8/images/gallery-image-2.png?v=2020-10-27T13:58:43.550Z"
									object-fit="cover"
									box-shadow="0px 4px 31px rgba(0, 0, 0, 0.15)"
									border-radius="12px"
									max-height="176px"
									width="100%"
									object-position="63% 67%"
								/>
								{"    "}
							</StackItem>
							<StackItem width="50%" display="flex">
								<Override slot="StackItemContent" padding="0px 16px 0px 0px" lg-padding="0px 0px 16px 16px" />
								{"        "}
								<Image
									src="https://uploads.quarkly.io/5f98119ab40b56001e9525d8/images/gallery-image-3.png?v=2020-10-27T14:01:24.340Z"
									object-fit="cover"
									box-shadow="0px 4px 31px rgba(0, 0, 0, 0.15)"
									border-radius="12px"
									max-height="176px"
									width="100%"
									object-position="63% 67%"
								/>
								{"    "}
							</StackItem>
							<StackItem width="50%" display="flex">
								<Override slot="StackItemContent" padding="0px 0px 0px 16px" lg-padding="0px 16px 16px 0px" />
								{"        "}
								<Image
									src="https://uploads.quarkly.io/5f98119ab40b56001e9525d8/images/gallery-image-4.png?v=2020-10-27T14:01:32.765Z"
									object-fit="cover"
									box-shadow="0px 4px 31px rgba(0, 0, 0, 0.15)"
									border-radius="12px"
									max-height="176px"
									width="100%"
									object-position="63% 67%"
								/>
								{"    "}
							</StackItem>
							<StackItem width="33.333%" display="flex" lg-width="50%">
								<Override slot="StackItemContent" padding="0px 16px 0px 0px" lg-padding="0px 0px 16px 16px" />
								{"        "}
								<Image
									src="https://uploads.quarkly.io/5f98119ab40b56001e9525d8/images/gallery-image-5.png?v=2020-10-27T14:01:45.478Z"
									object-fit="cover"
									box-shadow="0px 4px 31px rgba(0, 0, 0, 0.15)"
									border-radius="12px"
									max-height="176px"
									width="100%"
									object-position="40% 67%"
								/>
								{"    "}
							</StackItem>
							<StackItem width="33.333%" display="flex" lg-width="50%">
								<Override slot="StackItemContent" padding="0px 8px 0px 8px" lg-padding="0px 16px 0px 0px" />
								{"        "}
								<Image
									src="https://uploads.quarkly.io/5f98119ab40b56001e9525d8/images/gallery-image-6.png?v=2020-10-27T14:01:54.104Z"
									object-fit="cover"
									box-shadow="0px 4px 31px rgba(0, 0, 0, 0.15)"
									border-radius="12px"
									max-height="176px"
									width="100%"
									object-position="33% 63%"
								/>
								{"    "}
							</StackItem>
							<StackItem width="33.333%" display="flex" lg-width="50%">
								<Override slot="StackItemContent" padding="0px 0px 0px 16px" />
								{"        "}
								<Image
									src="https://uploads.quarkly.io/5f98119ab40b56001e9525d8/images/gallery-image-7.png?v=2020-10-27T14:02:02.123Z"
									object-fit="cover"
									box-shadow="0px 4px 31px rgba(0, 0, 0, 0.15)"
									border-radius="12px"
									max-height="176px"
									width="100%"
									object-position="63% 67%"
								/>
								{"    "}
							</StackItem>
							{"    "}
						</Stack>
						{"        "}{"    "}
					</StackItem>
					{"    "}
				</Stack>
			</Box>
		</Section>
		<Section background="--color-background" padding="90px 0 90px 0">
			<Override
				slot="SectionContent"
				max-width="1170px"
				flex-wrap="wrap"
				flex-direction="column"
				align-items="center"
				justify-content="center"
			/>
			<Box
				width="100%"
				display="flex"
				flex-direction="column"
				align-items="center"
				flex-wrap="wrap"
			>
				<Text
					text-align="center"
					font="--headline2"
					color="#ffffff"
					margin="0px 0px 0px 0px"
					sm-font="normal 400 36px/54px Inter, sans-serif"
				>
					Partners{"\n\n"}
				</Text>
				<Text
					text-align="center"
					font="--lead"
					color="#ffffff"
					margin="27px 0px 70px 0px"
					sm-margin="27px 0px 50px 0px"
				>
					We focus on ergonomics and meeting you where you work.{" "}
					<br />
					It's only a keystroke away.{"\n\n"}
				</Text>
				<Box
					display="flex"
					width="80%"
					flex-wrap="wrap"
					lg-align-items="center"
					lg-justify-content="center"
				>
					<Box
						width="16.6667%"
						padding="0px 0px 0px 15px0px"
						display="flex"
						flex-wrap="wrap"
						lg-width="25%"
						sm-width="33.333%"
					>
						<Box
							width="100%"
							display="flex"
							position="relative"
							z-index="1"
							flex-direction="column"
							align-items="center"
							justify-content="center"
							border-radius="10px"
							margin="15px 15px 15px 15px"
						>
							<Image margin="0px 0px 40px 0px" src="https://uploads.quarkly.io/5f98119ab40b56001e9525d8/images/logos-apple-app-store.svg?v=2020-10-27T14:04:01.189Z" sm-max-height="60px" />
						</Box>
					</Box>
					<Box
						width="16.6667%"
						padding="0px 0px 0px 15px0px"
						display="flex"
						flex-wrap="wrap"
						lg-width="25%"
						sm-width="33.333%"
					>
						<Box
							width="100%"
							display="flex"
							position="relative"
							z-index="1"
							flex-direction="column"
							align-items="center"
							justify-content="center"
							border-radius="10px"
							margin="15px 15px 15px 15px"
						>
							<Image margin="0px 0px 40px 0px" src="https://uploads.quarkly.io/5f98119ab40b56001e9525d8/images/logos-apiary.svg?v=2020-10-27T14:04:13.043Z" sm-max-height="60px" />
						</Box>
					</Box>
					<Box
						width="16.6667%"
						padding="0px 0px 0px 15px0px"
						display="flex"
						flex-wrap="wrap"
						lg-width="25%"
						sm-width="33.333%"
					>
						<Box
							width="100%"
							display="flex"
							position="relative"
							z-index="1"
							flex-direction="column"
							align-items="center"
							justify-content="center"
							border-radius="10px"
							margin="15px 15px 15px 15px"
						>
							<Image margin="0px 0px 40px 0px" src="https://uploads.quarkly.io/5f98119ab40b56001e9525d8/images/logos-android-icon.svg?v=2020-10-27T14:04:21.893Z" sm-max-height="60px" />
						</Box>
					</Box>
					<Box
						width="16.6667%"
						padding="0px 0px 0px 15px0px"
						display="flex"
						flex-wrap="wrap"
						lg-width="25%"
						sm-width="33.333%"
					>
						<Box
							width="100%"
							display="flex"
							position="relative"
							z-index="1"
							flex-direction="column"
							align-items="center"
							justify-content="center"
							border-radius="10px"
							margin="15px 15px 15px 15px"
						>
							<Image margin="0px 0px 40px 0px" src="https://uploads.quarkly.io/5f98119ab40b56001e9525d8/images/logos-basecamp.svg?v=2020-10-27T14:04:55.556Z" sm-max-height="60px" />
						</Box>
					</Box>
					<Box
						width="16.6667%"
						padding="0px 0px 0px 15px0px"
						display="flex"
						flex-wrap="wrap"
						lg-width="30%"
						sm-width="33.333%"
					>
						<Box
							width="100%"
							display="flex"
							position="relative"
							z-index="1"
							flex-direction="column"
							align-items="center"
							justify-content="center"
							border-radius="10px"
							margin="15px 15px 15px 15px"
						>
							<Image margin="0px 0px 40px 0px" src="https://uploads.quarkly.io/5f98119ab40b56001e9525d8/images/logos-airbnb.svg?v=2020-10-27T14:03:33.914Z" sm-max-height="60px" />
						</Box>
					</Box>
					<Box
						width="16.6667%"
						padding="0px 0px 0px 15px0px"
						display="flex"
						flex-wrap="wrap"
						lg-width="30%"
						sm-width="33.333%"
					>
						<Box
							width="100%"
							display="flex"
							position="relative"
							z-index="1"
							flex-direction="column"
							align-items="center"
							justify-content="center"
							border-radius="10px"
							margin="15px 15px 15px 15px"
						>
							<Image margin="0px 0px 40px 0px" src="https://uploads.quarkly.io/5f98119ab40b56001e9525d8/images/logos-ibm.svg?v=2020-10-27T14:05:03.981Z" sm-max-height="32px" />
						</Box>
					</Box>
				</Box>
			</Box>
		</Section>
		<Section background="--color-background" padding="90px 0 90px 0">
			<Override
				slot="SectionContent"
				max-width="990px"
				flex-wrap="wrap"
				flex-direction="column"
				align-items="center"
				justify-content="center"
			/>
			<Box
				width="100%"
				display="flex"
				flex-direction="column"
				align-items="center"
				flex-wrap="wrap"
			>
				<Text
					text-align="center"
					font="--headline2"
					color="#ffffff"
					margin="0px 0px 50px 0px"
					sm-font="normal 400 36px/54px Inter, sans-serif"
				>
					Testimonials{"\n\n"}
				</Text>
				<Box display="flex" width="100%" flex-wrap="wrap">
					<Box
						width="50%"
						padding="0px 0px 0px 15px0px"
						display="flex"
						flex-wrap="wrap"
						sm-width="100%"
					>
						<Box
							width="100%"
							display="flex"
							position="relative"
							z-index="1"
							flex-direction="column"
							border-radius="10px"
							margin="15px 15px 15px 15px"
							border-color="#5C5C5C"
							border-width="1px"
							border-style="solid"
							padding="40px 40px 56px 40px"
							sm-padding="24px 24px 24px 24px"
						>
							<Box display="flex">
								<Image margin="0px 23px 0px 0px" src="https://uploads.quarkly.io/5f98119ab40b56001e9525d8/images/user-pic-Claire-Bell.png?v=2020-10-27T14:08:54.841Z" max-height="50px" />
								<Box display="flex" flex-direction="column">
									<Text font="--base" color="--biruza" margin="0px 0px 0px 0px">
										Claire Bell{"\n\n"}
									</Text>
									<Text font="--base" color="#ffffff" margin="0px 0px 0px 0px">
										Designer{"\n\n\n\n"}
									</Text>
								</Box>
							</Box>
							<Text font="--base" color="#ffffff" margin="30px 0px 0px 0px">
								I just wanted to share a quick note and let you know that you do a really good job. I'm glad I decided to work with you. Wonderful experience!{"\n\n\n\n"}
							</Text>
						</Box>
					</Box>
					<Box
						width="50%"
						padding="0px 0px 0px 15px0px"
						display="flex"
						flex-wrap="wrap"
						sm-width="100%"
					>
						<Box
							width="100%"
							display="flex"
							position="relative"
							z-index="1"
							flex-direction="column"
							border-radius="10px"
							margin="15px 15px 15px 15px"
							border-color="#5C5C5C"
							border-width="1px"
							border-style="solid"
							padding="40px 40px 56px 40px"
							sm-padding="24px 24px 24px 24px"
						>
							<Box display="flex">
								<Image margin="0px 23px 0px 0px" src="https://uploads.quarkly.io/5f98119ab40b56001e9525d8/images/user-pic-Claire-Bell.png?v=2020-10-27T14:08:54.841Z" max-height="50px" />
								<Box display="flex" flex-direction="column">
									<Text font="--base" color="--biruza" margin="0px 0px 0px 0px">
										Claire Bell{"\n\n"}
									</Text>
									<Text font="--base" color="#ffffff" margin="0px 0px 0px 0px">
										Designer{"\n\n\n\n"}
									</Text>
								</Box>
							</Box>
							<Text font="--base" color="#ffffff" margin="30px 0px 0px 0px">
								I just wanted to share a quick note and let you know that you do a really good job. I'm glad I decided to work with you. Wonderful experience!{"\n\n\n\n"}
							</Text>
						</Box>
					</Box>
					<Box
						width="50%"
						padding="0px 0px 0px 15px0px"
						display="flex"
						flex-wrap="wrap"
						sm-width="100%"
					>
						<Box
							width="100%"
							display="flex"
							position="relative"
							z-index="1"
							flex-direction="column"
							border-radius="10px"
							margin="15px 15px 15px 15px"
							border-color="#5C5C5C"
							border-width="1px"
							border-style="solid"
							padding="40px 40px 56px 40px"
						>
							<Box display="flex">
								<Image margin="0px 23px 0px 0px" src="https://uploads.quarkly.io/5f98119ab40b56001e9525d8/images/user-pic-Claire-Bell.png?v=2020-10-27T14:08:54.841Z" max-height="50px" />
								<Box display="flex" flex-direction="column">
									<Text font="--base" color="--biruza" margin="0px 0px 0px 0px">
										Claire Bell{"\n\n"}
									</Text>
									<Text font="--base" color="#ffffff" margin="0px 0px 0px 0px">
										Designer{"\n\n\n\n"}
									</Text>
								</Box>
							</Box>
							<Text font="--base" color="#ffffff" margin="30px 0px 0px 0px">
								I just wanted to share a quick note and let you know that you do a really good job. I'm glad I decided to work with you. Wonderful experience!{"\n\n\n\n"}
							</Text>
						</Box>
					</Box>
					<Box
						width="50%"
						padding="0px 0px 0px 15px0px"
						display="flex"
						flex-wrap="wrap"
						sm-width="100%"
					>
						<Box
							width="100%"
							display="flex"
							position="relative"
							z-index="1"
							flex-direction="column"
							border-radius="10px"
							margin="15px 15px 15px 15px"
							border-color="#5C5C5C"
							border-width="1px"
							border-style="solid"
							padding="40px 40px 56px 40px"
							sm-padding="24px 24px 24px 24px"
						>
							<Box display="flex">
								<Image margin="0px 23px 0px 0px" src="https://uploads.quarkly.io/5f98119ab40b56001e9525d8/images/user-pic-Claire-Bell.png?v=2020-10-27T14:08:54.841Z" max-height="50px" />
								<Box display="flex" flex-direction="column">
									<Text font="--base" color="--biruza" margin="0px 0px 0px 0px">
										Claire Bell{"\n\n"}
									</Text>
									<Text font="--base" color="#ffffff" margin="0px 0px 0px 0px">
										Designer{"\n\n\n\n"}
									</Text>
								</Box>
							</Box>
							<Text font="--base" color="#ffffff" margin="30px 0px 0px 0px">
								I just wanted to share a quick note and let you know that you do a really good job. I'm glad I decided to work with you. Wonderful experience!{"\n\n\n\n"}
							</Text>
						</Box>
					</Box>
				</Box>
			</Box>
		</Section>
		<Section background="--color-background" padding="90px 0 90px 0">
			<Override
				slot="SectionContent"
				max-width="1170px"
				flex-wrap="wrap"
				flex-direction="column"
				align-items="center"
				justify-content="center"
				sm-width="100%"
			/>
			<Box
				width="100%"
				display="flex"
				flex-direction="column"
				align-items="center"
				flex-wrap="wrap"
			>
				<Box display="flex" width="100%" flex-wrap="wrap">
					<Box
						width="50%"
						padding="0px 0px 0px 0px"
						display="flex"
						flex-wrap="wrap"
						lg-width="100%"
					>
						<Box
							width="100%"
							display="flex"
							position="relative"
							z-index="1"
							flex-direction="column"
							border-radius="33px 0px 0px 33px"
							margin="0px 0px 0px 0px"
							border-width="0px"
							padding="78px 40px 78px 40px"
							background="#343434"
							box-shadow="0px 4px 31px rgba(0, 0, 0, 0.15)"
							align-items="flex-start"
							lg-border-radius="33px 33px 0px 0px"
							lg-align-items="center"
							sm-border-radius="0px"
						>
							<Text
								font="normal 400 52px/62px --fontFamily-googleInter"
								color="#ffffff"
								margin="0px 0px 37px 0px"
								letter-spacing="0.2px"
								sm-font="normal 400 36px/54px Inter, sans-serif"
							>
								OpenType features{" "}
								<br />
								and Variable fonts{"\n\n"}
							</Text>
							<Button
								font="normal 500 17px/24px --fontFamily-googleInter"
								background="--color-blue"
								border-width="0px"
								border-radius="0px"
								padding="13.5px 67px 13.5px 67px"
								margin="0px 10px 0px 0px"
								box-shadow="0px 4px 31px rgba(0, 0, 0, 0.15)"
								hover-transform="translateY(-10px)"
								transition="all 3s ease 0s"
							>
								Try For Free{"\n\n"}
							</Button>
						</Box>
					</Box>
					<Box
						width="50%"
						padding="0px 0px 0px 0px"
						display="flex"
						flex-wrap="wrap"
						lg-width="100%"
					>
						<Image
							src="https://uploads.quarkly.io/5f98119ab40b56001e9525d8/images/cta-image.png?v=2020-10-27T14:18:13.842Z"
							max-height="368px"
							width="100%"
							object-fit="cover"
							object-position="100% 0%"
							border-radius="0px 33px 33px 0px"
							lg-border-radius="0px 0px 33px 33px"
							sm-border-radius="0px"
						/>
					</Box>
				</Box>
			</Box>
		</Section>
		<Section padding="0px 0 0px 0">
			<Override slot="SectionContent" max-width="none" width="100%" position="relative" />
			<Box
				position="absolute"
				width="100%"
				height="100%"
				background="rgba(2, 228, 192, 0.4)"
				z-index="2"
			/>
			<GoogleMap query="california" />
		</Section>
		<Section background="--color-background" padding="90px 0 90px 0" lg-padding="90px 0 70px 0">
			<Override slot="SectionContent" max-width="1170px" flex-wrap="wrap" flex-direction="row" />
			<Box
				width="20%"
				display="flex"
				flex-direction="column"
				lg-width="33.333%"
				sm-width="100%"
			>
				<Text margin="0px 0px 24px 0px" font="--lead" color="#ffffff">
					Product{"\n\n"}
				</Text>
				<Link
					href="#"
					font="--base"
					text-decoration-line="initial"
					letter-spacing="0.2px"
					color="rgba(255, 255, 255, 1)"
					opacity="0.7"
					hover-opacity="1"
					margin="0px 0px 19px 0px"
				>
					Overview{"\n\n"}
				</Link>
				<Link
					href="#"
					text-decoration-line="initial"
					font="--base"
					letter-spacing="0.2px"
					color="rgba(255, 255, 255, 1)"
					opacity="0.7"
					hover-opacity="1"
					margin="0px 0px 19px 0px"
				>
					Features{"\n\n"}
				</Link>
				<Link
					href="#"
					text-decoration-line="initial"
					font="--base"
					letter-spacing="0.2px"
					color="rgba(255, 255, 255, 1)"
					opacity="0.7"
					hover-opacity="1"
					margin="0px 0px 19px 0px"
				>
					Roadmap{"\n\n\n\n"}
				</Link>
				<Link
					href="#"
					text-decoration-line="initial"
					font="--base"
					letter-spacing="0.2px"
					color="rgba(255, 255, 255, 1)"
					opacity="0.7"
					hover-opacity="1"
					margin="0px 0px 19px 0px"
				>
					Pricing{"\n\n"}
				</Link>
			</Box>
			<Box
				width="20%"
				display="flex"
				flex-direction="column"
				lg-width="33.333%"
				sm-width="100%"
			>
				<Text margin="0px 0px 24px 0px" font="--lead" color="#ffffff">
					About{"\n\n"}
				</Text>
				<Link
					href="#"
					text-decoration-line="initial"
					font="--base"
					letter-spacing="0.2px"
					color="rgba(255, 255, 255, 1)"
					opacity="0.7"
					hover-opacity="1"
					margin="0px 0px 19px 0px"
				>
					Overview{"\n\n"}
				</Link>
				<Link
					href="#"
					text-decoration-line="initial"
					font="--base"
					letter-spacing="0.2px"
					color="rgba(255, 255, 255, 1)"
					opacity="0.7"
					hover-opacity="1"
					margin="0px 0px 19px 0px"
				>
					Features{"\n\n"}
				</Link>
				<Link
					href="#"
					text-decoration-line="initial"
					font="--base"
					letter-spacing="0.2px"
					color="rgba(255, 255, 255, 1)"
					opacity="0.7"
					hover-opacity="1"
					margin="0px 0px 19px 0px"
				>
					Roadmap{"\n\n\n\n"}
				</Link>
				<Link
					href="#"
					text-decoration-line="initial"
					font="--base"
					letter-spacing="0.2px"
					color="rgba(255, 255, 255, 1)"
					opacity="0.7"
					hover-opacity="1"
					margin="0px 0px 19px 0px"
				>
					Pricing{"\n\n"}
				</Link>
			</Box>
			<Box
				width="20%"
				display="flex"
				flex-direction="column"
				lg-width="33.333%"
				sm-width="100%"
			>
				<Text margin="0px 0px 24px 0px" font="--lead" color="#ffffff">
					Contact{"\n\n"}
				</Text>
				<Link
					href="#"
					text-decoration-line="initial"
					font="--base"
					letter-spacing="0.2px"
					color="rgba(255, 255, 255, 1)"
					opacity="0.7"
					hover-opacity="1"
					margin="0px 0px 19px 0px"
				>
					Overview{"\n\n"}
				</Link>
				<Link
					href="#"
					text-decoration-line="initial"
					font="--base"
					letter-spacing="0.2px"
					color="rgba(255, 255, 255, 1)"
					opacity="0.7"
					hover-opacity="1"
					margin="0px 0px 19px 0px"
				>
					Features{"\n\n"}
				</Link>
				<Link
					href="#"
					text-decoration-line="initial"
					font="--base"
					letter-spacing="0.2px"
					color="rgba(255, 255, 255, 1)"
					opacity="0.7"
					hover-opacity="1"
					margin="0px 0px 19px 0px"
				>
					Roadmap{"\n\n\n\n"}
				</Link>
				<Link
					href="#"
					text-decoration-line="initial"
					font="--base"
					letter-spacing="0.2px"
					color="rgba(255, 255, 255, 1)"
					opacity="0.7"
					hover-opacity="1"
					margin="0px 0px 19px 0px"
				>
					Pricing{"\n\n"}
				</Link>
			</Box>
			<Box
				width="40%"
				display="flex"
				flex-direction="column"
				lg-width="100%"
				lg-margin="30px 0px 0px 0px"
			>
				<Box display="flex" align-items="center" margin="25px 0px 36px 0px">
					<Icon category="fa" icon={FaMapMarkerAlt} color="--biruza" margin="0px 22px 0px 0px" />
					<Text margin="0px 0px 0px 0px" font="--base" color="#ffffff">
						65806 Briarwood Road San Francisco CA{" \n\n"}
					</Text>
				</Box>
				<Box display="flex" align-items="center" margin="0px 0px 36px 0px">
					<Icon category="fa" icon={FaPhoneVolume} color="--biruza" margin="0px 22px 0px 0px" />
					<Text margin="0px 0px 0px 0px" font="--base" color="#ffffff">
						<Link href="tel:4178651442  " color="#ffffff" text-decoration-line="initial">
							417-865-1442{"\n\n"}
						</Link>
					</Text>
				</Box>
				<SocialMedia
					facebook="https://www.facebook.com/quarklyapp/"
					twitter="https://twitter.com/quarklyapp"
					youtube="https://www.youtube.com/channel/UCK5bXs2L0bbSMQ82BQ3hIkw"
					vkontakte="https://vk.com/quarklyapp"
					telegram="https://t.me/joinchat/DqSYDhS0R9nMRvOtFbIxrQ"
					align-items="center"
					justify-content="flex-start"
				>
					<Override slot="link" background="rgba(237, 242, 246, 0)" color="#ffffff" margin="0 4px 0 -3px" />
					<Override slot="link-facebook" />
					<Override slot="link-vkontakte" display="none" />
					<Override slot="link-telegram" display="none">
						<div />
					</Override>
				</SocialMedia>
			</Box>
		</Section>
	</Theme>;
});