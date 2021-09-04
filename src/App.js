import logo from "./logo.svg";
import "./App.css";
import MyDocument from "./MyDocument";

import ReactPDF, {
  PDFViewer,
  PDFDownloadLink,
  Document,
  Page,
} from "@react-pdf/renderer";

const App = () => (
  <div>
    <PDFDownloadLink document={<MyDocument />} fileName="somename.pdf">
      {({ blob, url, loading, error }) =>
        loading ? "Loading document..." : "Download now!"
      }
    </PDFDownloadLink>

    <PDFViewer width="70%" style={{ height: "100vh" }}>
      <MyDocument />
    </PDFViewer>
  </div>
);

export default App;
