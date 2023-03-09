import { makeStyles } from "@material-ui/styles";

export default makeStyles((theme) => ({
  topPaperGridItem: {
    padding: "20px 10px",
    fontWeight: "bold",
  },
  gridLogo: {
    padding: "10px",
    display: "flex",
    justifyContent: "center",
  },
  madiumPaper: {
    backgroundColor: "#f3efefa6",
    padding: "10px",
  },
  madiumPaperGrid: {
    display: "flex",
    justifyContent: "center",
  },
  madiumPaperTypography: {
    fontWeight: "bold",
    fontSize: "30px",
    marginBottom: "10px",
  },
  underTopPaper: {
    marginBottom: "20px",
    borderRadius: "20px",
  },
  underPaperGrid: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    padding: "10px",
    lineHeight: "10px",
  },
  underTypography: {
    color: "#8b8989",
  },
  underPaperTypography: {
    fontWeight: "bold",
  },
  underPaperGridContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "left",
    alignItems: "left",
    width: "100%",
    padding: "20px",
    lineHeight: "25px",
  },
  buttonPaper: {
    padding: "30px",
    borderRadius: "20px",
  },
}));
