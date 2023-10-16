import Image from "next/image";
import { Box, Card, Grid } from "@mui/material";
import { ContactEmergency, Email, GitHub, LinkedIn } from "@mui/icons-material";

import { IconWithText } from "@/components";
import felipeImage from "../../public/Felipe.png";
import { HeaderTypography, ProfileInfoContainer } from "./components";

export default function CVHeader() {
  const profilePicture = (
    <Box
      sx={{
        width: 68,
        position: "relative",
        marginRight: 3,
      }}
    >
      <Image
        alt="profile picture"
        src={felipeImage.src}
        objectFit="contain"
        layout="fill"
      />
    </Box>
  );

  return (
    <Grid spacing={3} direction="column" container sx={{ marginBottom: 6 }}>
      <Grid container spacing={3} item direction="row">
        <Grid item md={4}>
          <HeaderTypography fontSize={48} fontWeight={500}>
            RESUME
          </HeaderTypography>
        </Grid>
        <Grid
          item
          md={8}
          sx={{
            display: "flex",
          }}
        >
          {profilePicture}
          <Box>
            <HeaderTypography
              fontSize={24}
              fontWeight={200}
              bgcolor="background.default"
              color="text.primary"
              sx={{ marginLeft: 0.5, marginTop: 2, marginBottom: -2 }}
            >
              Software Engineer
            </HeaderTypography>
            <HeaderTypography
              fontSize={48}
              fontWeight={500}
              bgcolor="background.default"
              color="text.primary"
              sx={{}}
            >
              FELIPE QUINTEROS
            </HeaderTypography>
          </Box>
        </Grid>
      </Grid>
      <Grid container item direction="row" sx={{ position: "relative" }}>
        <Grid item md={3}>
          <HeaderTypography fontSize={48} fontWeight={500}>
            PROFILE
          </HeaderTypography>
        </Grid>
        <Grid item md={9} container direction="row">
          <ProfileInfoContainer>
            <IconWithText
              Icon={Email}
              text="felipe.quinterosj@gmail.com"
              href="mailto:felipe.quinterosj@gmail.com"
            />
          </ProfileInfoContainer>
          <ProfileInfoContainer>
            <IconWithText
              Icon={LinkedIn}
              text="LinkedIn"
              href="https://linkedin.com/in/fquinterosj"
            />
          </ProfileInfoContainer>
          <ProfileInfoContainer>
            <IconWithText
              Icon={GitHub}
              text="Github"
              href="https://github.com/fnquinteros/"
            />
          </ProfileInfoContainer>
          <ProfileInfoContainer>
            <IconWithText Icon={ContactEmergency} text="Swiss B Permit" />
          </ProfileInfoContainer>
        </Grid>
      </Grid>
    </Grid>
  );
}
