import React, { useState } from "react";
import {
  Typography,
  Grid2,
  Paper,
  Box,
  FormControl,
  Select,
  MenuItem,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";
import { PieChart } from "@mui/x-charts";
import styled from "@emotion/styled";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#fff",
  padding: 1,
  textAlign: "center",
}));

function Home() {
  const [age, setAge] = useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const STATES = [
    { value: "U01", name: "Andaman & Nicobar Islands" },
    { value: "S01", name: "Andhra Pradesh" },
    { value: "S02", name: "Arunachal Pradesh" },
    { value: "S03", name: "Assam" },
    { value: "S04", name: "Bihar" },
    { value: "U02", name: "Chandigarh" },
    { value: "S05", name: "Chhattisgarh" },
    { value: "U03", name: "Dadra & Nagar Haveli and Daman & Diu" },
    { value: "S06", name: "Goa" },
    { value: "S07", name: "Gujarat" },
    { value: "S08", name: "Haryana" },
    { value: "S09", name: "Himachal Pradesh" },
    { value: "U04", name: "Jammu and Kashmir" },
    { value: "S10", name: "Jharkhand" },
    { value: "S11", name: "Karnataka" },
    { value: "S12", name: "Kerala" },
    { value: "U05", name: "Ladakh" },
    { value: "U06", name: "Lakshadweep" },
    { value: "S13", name: "Madhya Pradesh" },
    { value: "S14", name: "Maharashtra" },
    { value: "S15", name: "Manipur" },
    { value: "S16", name: "Meghalaya" },
    { value: "S17", name: "Mizoram" },
    { value: "S18", name: "Nagaland" },
    { value: "U07", name: "NCT OF Delhi" },
    { value: "S19", name: "Odisha" },
    { value: "U08", name: "Puducherry" },
    { value: "S20", name: "Punjab" },
    { value: "S21", name: "Rajasthan" },
    { value: "S22", name: "Sikkim" },
    { value: "S23", name: "Tamil Nadu" },
    { value: "S24", name: "Telangana" },
    { value: "S25", name: "Tripura" },
    { value: "S26", name: "Uttar Pradesh" },
    { value: "S27", name: "Uttarakhand" },
    { value: "S28", name: "West Bengal" },
  ];

  const xValues = [
    "BJP",
    "INC",
    "SP",
    "AITC",
    "DMK",
    "TDP",
    "JD(U)",
    "SHSUBT",
    "NCPSP",
    "SHS",
    "Others",
  ];
  const yValues = [240, 99, 37, 29, 22, 16, 12, 9, 8, 7, 64];
  const barColors = [
    "#ff944d",
    "#19AAED",
    "#ff0000",
    "#aebedf",
    "#05F86E",
    "#39AC57",
    "#204795",
    "#4FB825",
    "#D781F9",
    "#D2691E",
    "#b3b3b3",
  ];

  const xParty = [
    "AAAP{1.11%}",
    "ADAL{0.13%}",
    "ADMK{1.39%}",
    "AGP{0.20%}",
    "AIFB{0.04%}",
    "AIMIM{0.22%}",
    "AITC{4.37%}",
    "AIUDF{0.10%}",
    "AJSUP{0.07%}",
    "BHRS{0.57%}",
    "BJD{1.46%}",
    "BJP{36.56%}",
    "BOPF{0.12%}",
    "BSP{2.04%}",
    "CPI{0.49%}",
    "CPI(M){1.76%}",
    "CPI(ML)(L){0.27%}",
    "DMDK{0.17%}",
    "DMK{1.82%}",
    "INC{21.19%}",
    "INLD{0.04%}",
    "IUML{0.27%}",
    "JD(S){0.34%}",
    "JD(U){1.25%}",
    "JKN{0.18%}",
    "JKNPPB{0.00%}",
    "JKPDP{0.07%}",
    "JMM{0.41%}",
    "JNJP{0.02%}",
    "KEC(M){0.04%}",
    "LJPRV{0.44%}",
    "MNF{0.02%}",
    "NCP{0.32%}",
    "NCPSP{0.92%}",
    "NDPP{0.05%}",
    "NOTA{0.99%}",
    "NPEP{0.06%}",
    "NPF{0.05%}",
    "RJD{1.57%}",
    "RLTP{0.09%}",
    "RVLTGONP{0.01%}",
    "SAD{0.28%}",
    "SDF{0.01%}",
    "SHS{1.15%}",
    "SHSUBT{1.48%}",
    "SKM{0.03%}",
    "SP{4.58%}",
    "TDP{1.98%}",
    "UDP{0.01%}",
    "UPPL{0.08%}",
    "VOTPP{0.09%}",
    "YSRCP{2.06%}",
    "ZPM{0.03%}",
    "Others{7.03%}",
  ];
  const yParty = [
    7147800, 808245, 8952587, 1298707, 289941, 1400215, 28213393, 625954,
    458677, 3657237, 9413379, 235973935, 777570, 13153818, 3157184, 11342553,
    1736771, 1128616, 11754710, 136759064, 226975, 1716186, 2173701, 8039663,
    1147041, 23268, 435980, 2652955, 113827, 277365, 2810250, 140264, 2059179,
    5921162, 350967, 6372220, 417930, 299536, 10107402, 596955, 64578, 1814318,
    77171, 7401447, 9567779, 164396, 29549381, 12775270, 44563, 488995, 571078,
    13316039, 208552, 45386696,
  ];
  const partyBarColors = [
    "#0072B0",
    "#8F5E1C",
    "#A08547",
    "#3B02C9",
    "#ff3333",
    "#00664d",
    "#aebedf",
    "#8AB3C5",
    "#3A15F9",
    "#F84996",
    "#9547A2",
    "#ff944d",
    "#4D73AE",
    "#000078",
    "#e70d21",
    "#FF1D15",
    "#BA5860",
    "#E6C018",
    "#05F86E",
    "#19AAED",
    "#EA0D35",
    "#006600",
    "#02865A",
    "#39AC57",
    "#1094D3",
    "#315478",
    "#87C2B9",
    "#337316",
    "#00009C",
    "#A209D6",
    "#A2006D",
    "#2E5694",
    "#4bc0c0",
    "#D781F9",
    "#483D8B",
    "#ff6384",
    "#ffb84d",
    "#306D29",
    "#D6901B",
    "#99cc00",
    "#F63D52",
    "#715B2F",
    "#68C539",
    "#D2691E",
    "#4FB825",
    "#9A485D",
    "#ff0000",
    "#204795",
    "#AD6812",
    "#47908F",
    "#FC0BA8",
    "#eb3734",
    "#B3B300",
    "#b3b3b3",
  ];

  const tableData = [
    {
      party: "Bharatiya Janata Party - BJP",
      won: 240,
      leading: 0,
      total: 240,
    },
    {
      party: "Indian National Congress - INC",
      won: 99,
      leading: 0,
      total: 99,
    },
    {
      party: "Samajwadi Party - SP",
      won: 37,
      leading: 0,
      total: 37,
    },
    {
      party: "All India Trinamool Congress - AITC",
      won: 29,
      leading: 0,
      total: 29,
    },
    {
      party: "Dravida Munnetra Kazhagam - DMK",
      won: 22,
      leading: 0,
      total: 22,
    },
    {
      party: "Telugu Desam - TDP",
      won: 16,
      leading: 0,
      total: 16,
    },
    {
      party: "Janata Dal (United) - JD(U)",
      won: 12,
      leading: 0,
      total: 12,
    },
    {
      party: "Shiv Sena (Uddhav Balasaheb Thackrey) - SHSUBT",
      won: 9,
      leading: 0,
      total: 9,
    },
    {
      party: "Nationalist Congress Party – Sharadchandra Pawar - NCPSP",
      won: 8,
      leading: 0,
      total: 8,
    },
    {
      party: "Shiv Sena - SHS",
      won: 7,
      leading: 0,
      total: 7,
    },
    {
      party: "Lok Janshakti Party(Ram Vilas) - LJPRV",
      won: 5,
      leading: 0,
      total: 5,
    },
    {
      party: "Yuvajana Sramika Rythu Congress Party - YSRCP",
      won: 4,
      leading: 0,
      total: 4,
    },
    {
      party: "Rashtriya Janata Dal - RJD",
      won: 4,
      leading: 0,
      total: 4,
    },
    {
      party: "Communist Party of India (Marxist) - CPI(M)",
      won: 4,
      leading: 0,
      total: 4,
    },
    {
      party: "Indian Union Muslim League - IUML",
      won: 3,
      leading: 0,
      total: 3,
    },
    {
      party: "Aam Aadmi Party - AAAP",
      won: 3,
      leading: 0,
      total: 3,
    },
    {
      party: "Others",
      won: 33,
      leading: 0,
      total: 33,
    },
    {
      party: "Independent- IND",
      won: 7,
      leading: 0,
      total: 7,
    },
  ];

  return (
    <Grid2 container spacing={4} margin={4}>
      <Grid2 size={12}>
        <Item>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              backgroundColor: "#d7caff",
              alignItems: "center",
              borderTopLeftRadius: "inherit",
              borderTopRightRadius: "inherit",
            }}
          >
            <Typography
              sx={{
                fontWeight: 700,
                fontSize: 24,
                padding: "0.5rem 1rem",
              }}
            >
              General Election to Parliamentary Constituencies: Trends & Results
              June-2024
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <PieChart
              series={[
                {
                  highlightScope: { fade: "global", highlight: "item" },
                  innerRadius: 100,
                  outerRadius: 400,
                  paddingAngle: 1,
                  cornerRadius: 5,
                  startAngle: -90,
                  endAngle: 90,
                  cx: 250,
                  cy: 500,
                  data: xValues.map((value, index) => ({
                    id: index,
                    value: yValues[index],
                    label: value,
                    color: barColors[index],
                  })),
                },
              ]}
              width={500}
              height={600}
              slotProps={{
                legend: {
                  direction: "row",
                  position: {
                    vertical: "bottom",
                    horizontal: "middle",
                  },
                  itemMarkWidth: 30,
                  itemMarkHeight: 10,
                  markGap: 2,
                  itemGap: 5,
                },
              }}
            />
          </Box>
          <Typography textAlign={"center"} fontWeight={"bold"}>
            Seats filled: 543/543
          </Typography>
        </Item>
      </Grid2>
      <Grid2 size={6}>
        <Item>
          <Box>
            <Typography
              borderRadius={1}
              sx={{
                backgroundColor: "#d7caff",
                borderBottomRightRadius: "0",
                borderBottomLeftRadius: "0",
                fontWeight: 700,
                fontSize: 24,
                padding: "0.5rem 1rem",
              }}
            >
              Party Wise Vote Share
            </Typography>

            <PieChart
              series={[
                {
                  highlightScope: { fade: "global", highlight: "item" },
                  innerRadius: 0,
                  outerRadius: 250,
                  paddingAngle: 0,
                  cornerRadius: 5,
                  startAngle: 0,
                  endAngle: 360,
                  cy: 300,
                  cx: 450,
                  data: xParty.map((value, index) => ({
                    id: index,
                    value: yParty[index],
                    label: value,
                    color: partyBarColors[index],
                  })),
                },
              ]}
              slotProps={{
                legend: {
                  labelStyle: {
                    fontSize: 10,
                    padding: 1,
                  },
                  direction: "row",
                  position: {
                    vertical: "bottom",
                    horizontal: "middle",
                  },
                  itemMarkWidth: 20,
                  itemMarkHeight: 10,
                  markGap: 2,
                  itemGap: 5,
                },
              }}
              height={700}
            />
          </Box>
        </Item>
      </Grid2>
      <Grid2 size={6}>
        <Item>
          <Box>
            <Typography
              borderRadius={1}
              sx={{
                backgroundColor: "#d7caff",
                borderBottomRightRadius: "0",
                borderBottomLeftRadius: "0",
                fontWeight: 700,
                fontSize: 24,
                padding: "0.5rem 1rem",
              }}
            >
              Party Wise Vote Share
            </Typography>
            <TableContainer component={Paper} sx={{ maxHeight: "700px" }}>
              <Table stickyHeader>
                <TableHead>
                  <TableRow>
                    {Object.keys(tableData[0]).map((x, i) => (
                      <TableCell
                        key={i}
                        sx={{
                          textTransform: "capitalize",
                          fontWeight: 900,
                          fontSize: "1rem",
                        }}
                      >
                        {x}
                      </TableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {tableData.map((item, index) => (
                    <TableRow
                      key={index}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {item.party}
                      </TableCell>
                      <TableCell align="right">{item.won}</TableCell>
                      <TableCell align="right">{item.leading}</TableCell>
                      <TableCell align="right">{item.total}</TableCell>
                    </TableRow>
                  ))}
                  <TableRow
                    sx={{
                      borderTop: "2px solid",
                    }}
                  >
                    <TableCell sx={{ fontWeight: 900 }}>Total</TableCell>
                    <TableCell align="right" sx={{ fontWeight: 900 }}>
                      {" "}
                      543
                    </TableCell>
                    <TableCell align="right" sx={{ fontWeight: 900 }}>
                      0
                    </TableCell>
                    <TableCell align="right" sx={{ fontWeight: 900 }}>
                      543
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        </Item>
      </Grid2>
    </Grid2>
  );
}

export default Home;
