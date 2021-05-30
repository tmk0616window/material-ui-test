import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Divider,
} from '@material-ui/core';

function TrafficByDevice() {
  return (
    <Card>
      <CardHeader title="締め切り一覧" />
      <Divider />
      <CardContent>
        <Box
          sx={{
            height: 300,
            position: 'relative'
          }}
        >
          {/* <Bar
            data={data}
            options={options}
          /> */}
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            pt: 2
          }}
        >
          {}
        </Box>
      </CardContent>
    </Card>
  );
}

export default TrafficByDevice;
