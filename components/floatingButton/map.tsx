import { Box, Typography, useTheme } from "@mui/material";
import Image from "next/image";
import RoomIcon from "@mui/icons-material/Room";
import PopupState, { bindHover, bindPopover } from "material-ui-popup-state";
import HoverPopover from "material-ui-popup-state/HoverPopover";
import { makeStyles } from "@mui/styles";
import { FunctionComponent } from "react";
import { useGlobalDataContext } from "../../contexts/GlobalDataContext";

const useStyles = makeStyles(() => {
  const { palette } = useTheme();

  return {
    paper: {
      border: `1px solid ${palette.secondary.main}`,
      borderRadius: 8,
      padding: "10px 30px",
      overflowX: "unset",
      overflowY: "unset",
      marginTop: 5,
      textAlign: "center",
      "&::before": {
        content: '""',
        position: "absolute",
        marginRight: "-0.71em",
        top: -13,
        right: "50%",
        margin: "0 auto",
        width: 25,
        height: 25,
        backgroundColor: palette.secondary.main,
        clipPath: "polygon(50% 0%, 0 49%, 100% 51%)",
      },
    },
  };
});

const Map: FunctionComponent = () => {
  const classes = useStyles();

  const {
    acf: { countries },
  } = useGlobalDataContext();

  return (
    <Box position="relative" width="100%" height="100%">
      <Image
        src="/img/carte-without-marks.png"
        layout="fill"
        objectFit="contain"
        alt=""
      />

      <Box position="relative" zIndex={3}>
        {countries.map(({ name, description, axis }, i) => (
          <PopupState
            variant="popover"
            popupId={`"popover_${name.trim()}"`}
            key={i}
          >
            {(popupState) => (
              <>
                <Box
                  sx={{ position: "absolute", ...axis }}
                  {...bindHover(popupState)}
                >
                  <RoomIcon fontSize="large" color="secondary" />
                </Box>

                <HoverPopover
                  {...bindPopover(popupState)}
                  classes={{
                    paper: classes.paper,
                  }}
                  sx={{
                    pointerEvents: "none",
                    px: 2,
                    py: 1,
                  }}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "center",
                  }}
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "center",
                  }}
                >
                  <Typography
                    color="primary"
                    fontWeight={500}
                    fontSize={"1.1rem"}
                  >
                    {name}
                  </Typography>
                  <Typography fontSize={"0.9rem"}>{description}</Typography>
                </HoverPopover>
              </>
            )}
          </PopupState>
        ))}
      </Box>
    </Box>
  );
};

export default Map;
