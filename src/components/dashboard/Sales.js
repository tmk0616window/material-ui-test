// import { Bar } from 'react-chartjs-2';
import {
  Box,
  Button,
  Card,
  CardContent,
  Divider
} from '@material-ui/core';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';

function Sales() {
  return (
    <Card>
      <Divider />
      <CardContent>
        <Box
          sx={{
            height: 400,
            position: 'relative'
          }}
        >
          {/* <Bar
            data={data}
            options={options}
          /> */}
        </Box>
      </CardContent>
      <Divider />
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-end',
          p: 2
        }}
      >
        <Button
          color="primary"
          endIcon={<ArrowRightIcon />}
          size="small"
          variant="text"
        >
        　お知らせ一覧
        </Button>
      </Box>
    </Card>
  );
}

export default Sales;
