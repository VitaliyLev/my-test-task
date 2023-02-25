import Routes from './Routs/Routs';
import { ThemeModeContext } from './ThemeContext/ThemeContext';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import './../index.css';

export const App = () => {
  return (
    <ThemeModeContext>
      <Routes />
    </ThemeModeContext>
  );
};

//приклад
// const StyledDiv = styled('div')(({ theme }) => ({
//   fontFamily: 'Roboto',
//   color: theme.palette.text.primary,
// }));

// const StyledTypography = styled(Typography)(({ theme }) => ({
//   fontFamily: 'Roboto',
//   color: theme.palette.text.primary,
// }));

// import * as React from 'react';
// import Accordion from '@mui/material/Accordion';
// import AccordionSummary from '@mui/material/AccordionSummary';
// import AccordionDetails from '@mui/material/AccordionDetails';
// import Typography from '@mui/material/Typography';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

// export const App = () => {
//   return (
//     <div>
//       <Accordion>
//         <AccordionSummary
//           expandIcon={<ExpandMoreIcon />}
//           aria-controls="panel1a-content"
//           id="panel1a-header"
//         >
//           <Typography>Accordion 1</Typography>
//         </AccordionSummary>
//         <AccordionDetails>
//           <Typography>
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
//             malesuada lacus ex, sit amet blandit leo lobortis eget.
//           </Typography>
//         </AccordionDetails>
//       </Accordion>
//       {/* <Accordion>
//         <AccordionSummary
//           expandIcon={<ExpandMoreIcon />}
//           aria-controls="panel2a-content"
//           id="panel2a-header"
//         >
//           <Typography>Accordion 2</Typography>
//         </AccordionSummary>
//         <AccordionDetails>
//           <Typography>
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
//             malesuada lacus ex, sit amet blandit leo lobortis eget.
//           </Typography>
//         </AccordionDetails>
//       </Accordion>
//       <Accordion disabled>
//         <AccordionSummary
//           expandIcon={<ExpandMoreIcon />}
//           aria-controls="panel3a-content"
//           id="panel3a-header"
//         >
//           <Typography>Disabled Accordion</Typography>
//         </AccordionSummary>
//       </Accordion> */}
//     </div>
//   );
// };
