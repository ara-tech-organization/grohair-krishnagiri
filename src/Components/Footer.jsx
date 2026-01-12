import React, { useEffect } from "react";
import { Box, Grid, Typography, Link as MUILink } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import AOS from "aos";
import "aos/dist/aos.css";
import logo from "./Images/krishnagiri-white.png";

const Footer = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <Box sx={{ backgroundColor: "#000", pt: 3, color: "#fff", width: "100%" }}>
      <Grid
        container
        spacing={4}
        justifyContent={{ xs: "center", sm: "center", md: "space-between" }}
        alignItems="flex-start" // TOP ALIGNMENT FIX
        textAlign={{ xs: "center", sm: "center", md: "left" }}
        px={{ xs: 2, sm: 4, md: 5 }}
        pt={10}
        pb={10}
      >
        {/* LOGO SECTION */}
        <Grid size={{ xs: 12, sm: 10, md: 4, lg: 4 }}
          data-aos="fade-down"
          display="flex"
          flexDirection="column"
          alignItems={{ xs: "center", md: "flex-start" }}
        >
          <Box>
            <Box
              component="img"
              src={logo}
              alt="GroHair Logo"
              sx={{ width: { xs: 180, sm: 200, md: 220 }, mb: 2 }}
            />

            <Typography fontSize={{ xs: 12, md: 16 }} lineHeight={1.4}>
              Restore your confidence today with our expert hair restoration
              solutions.
              <br />
              Book your consultation now!
            </Typography>
          </Box>
        </Grid>

       
        <Grid size={{ xs: 12, sm: 10, md: 3, lg: 3 }}
         
          data-aos="fade-up"
          display="flex"
          flexDirection="column"
          alignItems={{ xs: "center", md: "flex-start" }}
        >
          <Typography variant="h6" fontWeight="bold" mb={1}>
            Contact
          </Typography>

          <Typography fontSize={{ xs: 15, md: 17 }} lineHeight={1.6}>
            Door No 5i/3, Somarpet, Salem ByPass Road, near Jayavilas Hotel,
            Gandhi Nagar, Krishnagiri, Tamil Nadu 635002
          </Typography>

          <Box display="flex" alignItems="center" mt={2}>
            <PhoneIcon sx={{ color: "#fff", mr: 1 }} />
            <Typography fontSize={{ xs: 15, md: 17 }}>97877 56789</Typography>
          </Box>

          <Box display="flex" alignItems="center" mt={1.5}>
            <EmailIcon sx={{ color: "#fff", mr: 1 }} />
            <Typography fontSize={{ xs: 15, md: 17 }}>
              Krishnagiri@adgrohair.com
            </Typography>
          </Box>
        </Grid>

        {/* QUICK LINKS SECTION */}
        <Grid size={{ xs: 12, sm: 10, md: 2, lg: 2 }}
          data-aos="zoom-in"
          display="flex"
          flexDirection="column"
          alignItems={{ xs: "center", md: "flex-start" }}
        >
          <Typography variant="h6" fontWeight="bold" mb={2}>
            Links
          </Typography>

          <Box
            display="grid"
            gridTemplateColumns={{ xs: "1fr 1fr", sm: "1fr 1fr", md: "1fr" }}
            gap={1}
            textAlign={{ xs: "center", md: "left" }}
          >
            {[
              { label: "Home", path: "/" },
              { label: "About", path: "/about" },
              { label: "Services", path: "/services" },
              { label: "Contact", path: "/contact" },
            ].map((link, i) => (
              <MUILink
                key={i}
                component={RouterLink}
                to={link.path}
                underline="hover"
                color="inherit"
                fontSize={{ xs: 15, md: 16 }}
                sx={{
                  transition: "0.3s",
                  "&:hover": {
                    fontWeight: "bold",
                    textDecoration: "underline",
                    color: "#e3242b",
                  },
                }}
              >
                {link.label}
              </MUILink>
            ))}
          </Box>
        </Grid>

        {/* LOCATION MAP */}
        <Grid
          size={{ xs: 12, sm: 10, md: 3, lg: 3 }}
          data-aos="fade-down"
          display="flex"
          flexDirection="column"
          alignItems={{ xs: "center", md: "flex-start" }}
        >
          <Typography variant="h6" fontWeight="bold" mb={2}>
            Location
          </Typography>

          <Box
            sx={{
              position: "relative",
              width: "100%",
              paddingTop: "56.25%",
              border: "1px solid #ddd",
              borderRadius: 2,
              overflow: "hidden",
            }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3524.575909125458!2d78.20365867506898!3d12.530519087745834!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bac3525b6acbe23%3A0xbda7fc6a80057595!2sAdvanced%20GroHair%20%26%20GloSkin%20-%20Krishnagiri!5e1!3m2!1sen!2sin!4v1767941690802!5m2!1sen!2sin"
              style={{
                border: 0,
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
              }}
              loading="lazy"
              allowFullScreen=""
            ></iframe>
          </Box>
        </Grid>
      </Grid>

      {/* BOTTOM BAR */}
      <Box
        sx={{
          py: 2,
          backgroundColor: "#e3242b",
          color: "white",
          textAlign: "center",
          width: "100%",
        }}
      >
        <Typography fontSize={{ lg: "1rem", xs: "0.9rem", md: "0.8rem" }}>
          © GroHair & GloSkin. All rights reserved. Website created by{" "}
          <strong>
            ARA Discover Technologies – A unit of ARA Discoveries Pvt. Ltd.
          </strong>
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
