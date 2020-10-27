import React from "react";
import { useOverrides, Override, Menu, Section } from "@quarkly/components";
import { Image, Box, Button } from "@quarkly/widgets";
import BurgerMenu from "./BurgerMenu";
const defaultProps = {
	"background": "--color-background"
};
const overrides = {
	"box": {
		"kind": "Box",
		"props": {
			"width": "33.3333%",
			"display": "flex",
			"lg-width": "40%"
		}
	},
	"image": {
		"kind": "Image",
		"props": {
			"src": "https://uploads.quarkly.io/5f98119ab40b56001e9525d8/images/logo.svg?v=2020-10-27T12:36:25.284Z"
		}
	},
	"box1": {
		"kind": "Box",
		"props": {
			"width": "33.3333%",
			"display": "flex",
			"align-items": "center",
			"justify-content": "center",
			"lg-width": "60%",
			"lg-align-items": "center",
			"lg-justify-content": "flex-end"
		}
	},
	"menu": {
		"kind": "Menu",
		"props": {
			"display": "flex",
			"lg-display": "none"
		}
	},
	"menuOverride": {
		"kind": "Override",
		"props": {
			"slot": "item-404",
			"display": "none"
		}
	},
	"menuOverride1": {
		"kind": "Override",
		"props": {
			"slot": "link-index",
			"children": "Home"
		}
	},
	"menuOverride2": {
		"kind": "Override",
		"props": {
			"slot": "link",
			"color": "#ffffff",
			"text-decoration-line": "initial",
			"font": "normal 500 16px/24px --fontFamily-googleInter"
		}
	},
	"menuOverride3": {
		"kind": "Override",
		"props": {
			"slot": "link-active",
			"color": "#ffffff"
		}
	},
	"menuOverride4": {
		"kind": "Override",
		"props": {
			"slot": "item-learn-more",
			"display": "none"
		}
	},
	"burgerMenu": {
		"kind": "BurgerMenu",
		"props": {
			"display": "none",
			"lg-display": "block"
		}
	},
	"burgerMenuOverride": {
		"kind": "Override",
		"props": {
			"slot": "menu",
			"lg-position": "absolute",
			"lg-left": "0px",
			"lg-right": "0px",
			"lg-bottom": "auto",
			"lg-top": "105px",
			"lg-background": "#181818",
			"lg-height": "100vh"
		}
	},
	"overrideOverride": {
		"kind": "Override",
		"props": {
			"slot": "item",
			"lg-text-align": "center",
			"lg-font": "normal 400 30px/45px --fontFamily-googleInter",
			"lg-margin": "30px 0px 30px 0px"
		}
	},
	"overrideOverride1": {
		"kind": "Override",
		"props": {
			"slot": "link",
			"lg-text-decoration-line": "initial",
			"lg-color": "#ffffff"
		}
	},
	"overrideOverride2": {
		"kind": "Override",
		"props": {
			"slot": "item-404",
			"lg-display": "none"
		}
	},
	"overrideOverride3": {
		"kind": "Override",
		"props": {
			"slot": "link-index",
			"children": "Home"
		}
	},
	"overrideOverride4": {
		"kind": "Override",
		"props": {
			"slot": "link-learn-more",
			"lg-padding": "20px 40px 20px 40px",
			"lg-border-width": "1px",
			"lg-border-style": "solid",
			"lg-border-color": "#ffffff",
			"lg-font": "17px/20px Inter, sans-serif",
			"lg-margin": "0px 0px 0px 0px"
		}
	},
	"overrideOverride5": {
		"kind": "Override",
		"props": {
			"slot": "item-learn-more",
			"lg-margin": "60px 0px 60px 0px"
		}
	},
	"burgerMenuOverride1": {
		"kind": "Override",
		"props": {
			"slot": "icon",
			"color": "#ffffff",
			"size": "48px"
		}
	},
	"box2": {
		"kind": "Box",
		"props": {
			"width": "33.3333%",
			"display": "flex",
			"align-items": "center",
			"justify-content": "flex-end",
			"lg-display": "none"
		}
	},
	"button": {
		"kind": "Button",
		"props": {
			"font": "normal 500 17px/24px --fontFamily-googleInter",
			"background": "rgba(0, 119, 204, 0)",
			"border-width": "1px",
			"border-style": "solid",
			"border-color": "#ffffff",
			"border-radius": "0px",
			"padding": "13.5px 46px 13.5px 46px",
			"children": <>
				Login{"\n\n"}
			</>
		}
	}
};

const Header2 = props => {
	const {
		override,
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <Section {...rest}>
		<Override slot="SectionContent" max-width="1170px" flex-wrap="wrap" flex-direction="row" />
		<Box {...override("box")}>
			<Image {...override("image")} />
		</Box>
		<Box {...override("box1")}>
			<Menu {...override("menu")}>
				<Override {...override("menuOverride")} />
				<Override {...override("menuOverride1")} />
				<Override {...override("menuOverride2")} />
				<Override {...override("menuOverride3")} />
				<Override {...override("menuOverride4")} />
			</Menu>
			<BurgerMenu {...override("burgerMenu")}>
				<Override {...override("burgerMenuOverride")}>
					<Override {...override("overrideOverride")} />
					<Override {...override("overrideOverride1")} />
					<Override {...override("overrideOverride2")} />
					<Override {...override("overrideOverride3")} />
					<Override {...override("overrideOverride4")} />
					<Override {...override("overrideOverride5")} />
				</Override>
				<Override {...override("burgerMenuOverride1")} />
			</BurgerMenu>
		</Box>
		<Box {...override("box2")}>
			<Button {...override("button")} />
		</Box>
		{children}
	</Section>;
};

Object.assign(Header2, { ...Section,
	defaultProps,
	overrides
});
export default Header2;