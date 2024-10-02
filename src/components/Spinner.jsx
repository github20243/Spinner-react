import React from "react";
import { styled } from "@mui/system";
import { ScaleLoader } from "react-spinners";

 export const Spinner = ({ isLoading }) => {
	if (!isLoading) return null;

	return (
		<SpinnerOverlay>
			<SpinnerContent>
				<ScaleLoader size={17} color="#11e4e4" />
				<SpinnerText>Загрузка...</SpinnerText>
			</SpinnerContent>
		</SpinnerOverlay>
	);
};


const SpinnerOverlay = styled("div")(({}) => ({
	position: "fixed",
	top: 0,
	left: 0,
	width: "100vw",
	height: "100vh",
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
	background: "rgba(0, 0, 0, 0.45)",
	zIndex: 9999,
}));

const SpinnerContent = styled("div")(({}) => ({
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	width: "250px",
	height: "200px",
	backgroundColor: "white",
  justifyContent:'center',
  borderRadius:"8px"
}));

const SpinnerText = styled("div")(({}) => ({
	marginTop: "20px",
	color: "#11e4e4",
	fontSize: "18px",
	fontWeight: "bold",
  fontFamily:"monospace"
}));
