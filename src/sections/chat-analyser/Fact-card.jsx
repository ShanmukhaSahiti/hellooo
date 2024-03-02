import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
// import Link from '@mui/material/Link';
import Card from '@mui/material/Card';
import Avatar from '@mui/material/Avatar';
import { Typography } from '@mui/material';
import { alpha } from '@mui/material/styles';

import SvgColor from 'src/components/svg-color';

// ----------------------------------------------------------------------

export default function FactCard({ facts, index }) {
  const { averageMessageLength, longestMessage, name, numberOfWords, sortedEmojis } = facts;

  const latestPostLarge = index === 0;

  const latestPost = index === 1 || index === 2;

  const renderAvatar = (
    <Avatar
      alt={name}
      src={`../../hellooo/assets/images/avatars/${name}.jpeg`}
      sx={{
        zIndex: 9,
        width: 32,
        height: 32,
        position: 'absolute',
        left: (theme) => theme.spacing(3),
        bottom: (theme) => theme.spacing(-2),
        ...((latestPostLarge || latestPost) && {
          zIndex: 9,
          top: 24,
          left: 24,
          width: 40,
          height: 40,
        }),
      }}
    />
  );

  const renderTitle = (
    <Typography
      color="inherit"
      variant="subtitle2"
      sx={{
         height: '100%',
        // overflow: 'hidden',
        // WebkitLineClamp: 2,
        display: '-webkit-box',
        WebkitBoxOrient: 'vertical',
        ...(latestPostLarge && { typography: 'h5' }),
        ...((latestPostLarge || latestPost) && {
          color: 'common.white',
        }),
      }}
    >
      <Typography>No. of Words: {numberOfWords}</Typography>
      <Typography>Average Message Length : {averageMessageLength}</Typography>
      <Typography>Longest Message: {longestMessage}</Typography>
      <Typography>Top used emojis: {sortedEmojis}</Typography>
    </Typography>
  );

  const renderCover = (
    <Box
      component="img"
      alt={name}
      src={`../../hellooo/assets/images/${name}_funfact.jpeg`}
      sx={{
        top: 0,
        width: 1,
        height: 1,
        objectFit: 'cover',
        position: 'absolute',
      }}
    />
  );

  const renderShape = (
    <SvgColor
      color="paper"
      src="/hellooo/assets/icons/shape-avatar.svg"
      sx={{
        width: 80,
        height: 36,
        zIndex: 9,
        bottom: -15,
        position: 'absolute',
        color: 'background.paper',
        ...((latestPostLarge || latestPost) && { display: 'none' }),
      }}
    />
  );

  return (
    // <Grid xs={12} sm={latestPostLarge ? 12 : 6} md={latestPostLarge ? 6 : 3}>
    <Card>
      <Box
        sx={{
          position: 'relative',
          pt: 'calc(100% * 3 / 4)',
          ...((latestPostLarge || latestPost) && {
            pt: 'calc(100% * 4 / 3)',
            '&:after': {
              top: 0,
              content: "''",
              width: '100%',
              height: '100%',
              position: 'absolute',
              bgcolor: (theme) => alpha(theme.palette.grey[900], 0.72),
            },
          }),
          ...(latestPostLarge && {
            pt: {
              xs: 'calc(100% * 4 / 3)',
              sm: 'calc(100% * 3 / 4.66)',
            },
          }),
        }}
      >
        {renderShape}

        {renderAvatar}

        {renderCover}
      </Box>

      <Box
        sx={{
          p: (theme) => theme.spacing(4, 3, 3, 3),
          ...((latestPostLarge || latestPost) && {
            width: 1,
            bottom: 0,
            position: 'absolute',
          }),
        }}
      >
        {renderTitle}
      </Box>
    </Card>
    // </Grid>
  );
}

FactCard.propTypes = {
  facts: PropTypes.object.isRequired,
  index: PropTypes.number,
};
