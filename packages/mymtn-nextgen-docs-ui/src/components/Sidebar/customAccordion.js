import * as React from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { Link } from "@mui/material";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `none`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    // expandIcon={
    //   Icon ? (
    //     <Icon sx={{ fontSize: "0.9rem" }} />
    //   ) : (
    //     <ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />
    //   )
    // }
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, .05)"
      : "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

export default function CustomizedAccordions({
  summary,
  children,
  icon = null,
  noItmes = false,
  to = "",
}) {
  // const [expanded, setExpanded] = React.useState('panel1');

  // const handleChange = (panel) => (event, newExpanded) => {
  //   setExpanded(newExpanded ? panel : false);
  // };
  console.log("THE accordion PROP", icon);
  const Icon = icon;

  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={
            icon ? (
              <Icon
                sx={{
                  fontSize: "2rem",
                  color: "#1483e6",
                  fontWeight: "bolder",
                  cursor: "pointer",
                }}
              />
            ) : (
              <ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />
            )
          }
        >
          {!noItmes ? (
            <Typography fontSize="2rem">{summary}</Typography>
          ) : (
            <Link href={to}>{summary}</Link>
          )}
        </AccordionSummary>
        {!noItmes ? <AccordionDetails>{children}</AccordionDetails> : null}
      </Accordion>
    </div>
  );
}
