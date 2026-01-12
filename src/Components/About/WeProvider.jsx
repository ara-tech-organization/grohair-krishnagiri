import React, { useEffect } from "react";
import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import AboutImg from "../Images/Krishnagiri-about.jpg"; // make sure it's a girl image
import AOS from "aos";
import "aos/dist/aos.css";

const Section = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <Box
      id="about"
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: "center",
        justifyContent: "center",
        width: { lg: "95%", xs: "90%" },
        Height: "100vh",
        px: { xs: 2, md: 8 },
        py: 6,
        gap: 6,
        backgroundColor: "#fff",
        position: "relative",
        mb: { md: 10 },
        ml: { sm: 7, lg: 1, md: 3 },
        mt: 10,
      }}
    >
      <Box
        data-aos="fade-up"
        sx={{
          flex: 1,
          textAlign: { xs: "center", md: "left" },
          px: { xs: 1, md: 2 },
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Typography
          sx={{
            color: "#000",
            fontWeight: "bold",
            mb: 1,
            fontSize: { xs: "1rem", sm: "1.5rem", md: "1.2rem" },
          }}
        >
          We Provide
        </Typography>

        <Typography
          sx={{
            fontWeight: 700,
            color: "#E2231A",
            fontSize: {
              xs: "1.3rem",
              sm: "1.8rem",
              md: "2.2rem",
              lg: "2rem",
            },
            mb: 3,
            lineHeight: 1.4,
          }}
        >
          Welcome to GroHair & GloSkin <br /> Krishnagiri
        </Typography>

        <Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              gap: 3,
              justifyContent: { xs: "center", md: "flex-start" },
              alignItems: "stretch",
              flexWrap: "wrap",
            }}
          >
            {/* First Box */}
            <Box
              data-aos="zoom-in"
              sx={{
                backgroundColor: "#f5f5f5",
                p: 2,
                borderRadius: 2,
                flex: 1,
                minHeight: { xs: 200, sm: 180, md: 210 },
              }}
            >
              <Typography
                sx={{
                  color: "#555",
                  fontSize: { xs: "0.90rem", sm: "1.2rem", md: "1.05rem" },
                  mt: 1,
                }}
              >
                GroHair and GloSkin combine their deep expertise in hair and
                skin wellness with the serene pace of Krishnagiri. Our clinic
                blends clinical precision with a luxurious experience.
              </Typography>
            </Box>

            {/* Second Box */}
            <Box
              data-aos="zoom-in"
              sx={{
                backgroundColor: "#f5f5f5",
                p: 2,
                borderRadius: 2,
                flex: 1,
                minHeight: { xs: 200, sm: 180, md: 210 },
              }}
            >
              <Typography
                sx={{
                  color: "#555",
                  fontSize: { xs: "0.95rem", sm: "1.2rem", md: "1.05rem" },
                }}
              >
                At our Krishnagiri center, you’ll find the best of science and
                personalized treatments—hair thinning, pigmentation, anti-aging
                & more—performed by trained professionals.
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>

      <Box
        data-aos="fade-up"
        sx={{
          flex: 1,
          width: "100%",
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          mt: { xs: 4, md: 0 },
          pr: { md: 4, lg: 6 }, 
        }}
      >
        <Box
          component="img"
          src={AboutImg}
          alt="About Girl"
          sx={{
            width: "100%",
            height: { xs: "auto", md: "100%" },
            maxHeight: 600,
            objectFit: "cover",
            borderRadius: 4,
          }}
        />
      </Box>
    </Box>
  );
};

export default Section;
