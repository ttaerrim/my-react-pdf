import React from "react";
import {
  Document,
  Font,
  Page,
  Text,
  View,
  StyleSheet,
} from "@react-pdf/renderer";

import List, { Item } from "./List";

const MyDocument = () => {
  const title = "오늘의 회의";
  const topic = "회의록 PDF 생성";
  const author = "이태림";
  const keyword = ["회의", "주말", "자연어처리"];
  const summary = [
    "이것을 해야 합니다.",
    "저것도 해야 합니다.",
    "결론은 이것입니다.",
  ];

  return (
    <Document>
      <Page size="A4" style={styles.body}>
        <View style={styles.section}>
          <Text style={styles.title}>회의 제목: {title} </Text>
        </View>
        <View style={styles.subsection}>
          <Text>회의 안건: {topic}</Text>
        </View>
        <View style={styles.subsection}>
          <Text style={styles.subtitle}>회의 날짜: 2021년 n월 n일 n시 n분</Text>
        </View>
        <View style={styles.subsection}>
          <Text>작성자: {author}</Text>
          <Text>작성일: </Text>
          <Text>참석자: </Text>
        </View>
        <View style={styles.subsection}>
          <View>
            <Text style={styles.stitle}>회의 요약</Text>
          </View>
          <List>
            {summary.map((s, i) => (
              <Item key={i} style={(styles.detailContainer, styles.inner)}>
                {s}
              </Item>
            ))}
          </List>
          <Text style={styles.inner}>{summary[0]}</Text>
          <Text style={styles.inner}>{summary[1]}</Text>
          <Text style={styles.inner}>{summary[2]}</Text>
        </View>
        <View style={styles.subsection}>
          <View>
            <Text style={styles.stitle}>회의 키워드</Text>
          </View>
          <Text style={styles.inner}>
            {keyword[0]}, {keyword[1]}, {keyword[2]}
          </Text>
        </View>
      </Page>
    </Document>
  );
};

Font.register({
  family: "Nanum Gothic",
  src: "https://fonts.gstatic.com/ea/nanumgothic/v5/NanumGothic-Regular.ttf",
});

const styles = StyleSheet.create({
  body: {
    paddingTop: 35,
    paddingBottom: 65,
    paddingHorizontal: 35,
    fontFamily: "Nanum Gothic",
  },
  section: {
    margin: 0,
    padding: 0,
  },
  subsection: {
    margin: 5,
    padding: 5,
  },

  stitle: {
    marginBottom: 2,
  },
  inner: {
    textIndent: 20,
  },

  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  subtitle: {
    fontsize: 16,
  },
  detailContainer: {
    flexDirection: "row",
  },
});

export default MyDocument;
