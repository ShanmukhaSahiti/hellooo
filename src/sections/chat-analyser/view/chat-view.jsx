import { useState, useEffect } from 'react';
import * as whatsapp from 'whatsapp-chat-parser';

import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';

import { Chat } from 'src/utils/tranformChatData';

import FactCard from '../Fact-card';
import BarChart from '../bar-chart';
import WordCloud from '../word-cloud';
import LineChart from '../line-chart';
import SharePieChart from '../pie-chart';
import BarChartWeekly from '../bar-chart-weekly';
import chat from '../../../_mock/WhatsApp Chat with Vamshi.txt';
// ----------------------------------------------------------------------

export default function ChatView() {
  // const [chatObject, setChatObject] = useState([]);
  const [wordCloud, setWordCloud] = useState([]);
  // const [emojiCloud, setEmojiCloud] = useState([]);
  const [lineGraph, setLineGraph] = useState([]);
  const [funFacts, setFunFacts] = useState([]);
  const [share, setShare] = useState({});
  const [hourlyData, setHourlyData] = useState({});
  const [weekData, setWeekData] = useState({});

  useEffect(() => {
    fetch(chat)
      .then((r) => r.text())
      .then((text) => {
        // setChatObject(whatsapp.parseString(text));
        const chartdata = new Chat(whatsapp.parseString(text));
        chartdata.getAllWords().then((x) => {
          setWordCloud(x);
        });
        chartdata.getLineGraphData().then((x) => {
          setLineGraph(x);
        });
        chartdata.getFunFacts().then((x) => {
          setFunFacts(x);
        });
        chartdata.getShareOfSpeech().then((x) => {
          setShare(x);
        });
        // chartdata.getAllEmojis().then((x)=> setEmojiCloud(x));
        chartdata.getHourlyData().then((x) => setHourlyData(x));
        chartdata.getDailyData().then((x) => setWeekData(x));
      });
  }, []);

  return (
    <Container maxWidth="xl">
      <Grid container spacing={2}>
        <Grid xs={3}>
          <SharePieChart share={share} />
        </Grid>
        {funFacts.map((eachCardData, i) => (
          <Grid key={i} xs={4.5}>
            <FactCard facts={eachCardData} index={0} />
          </Grid>
        ))}
      </Grid>
      <Grid sx={{mb: 1}}>
        <WordCloud data={wordCloud} id="wordCloud" />
        {/* <WordCloud data={emojiCloud} id= "emojiCloud" /> */}
      </Grid>
      <Grid sx={{mb: 1}}>
        <LineChart data={lineGraph} />
      </Grid>
      <Grid sx={{mb: 1}}>
        <BarChart hourlyData={hourlyData} />
      </Grid>
      <Grid sx={{mb: 1}}>
        <BarChartWeekly weekData={weekData} />
      </Grid>
    </Container>
  );
}
