import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Header";

import StreamCreate from "./Streams/StreamCreate";
import StreamDelete from "./Streams/StreamDelete";
import StreamEdit from "./Streams/StreamEdit";
import StreamList from "./Streams/StreamList";
import StreamShow from "./Streams/StreamShow";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="ui container">
          <Header />
        </div>
        <Routes>
          <Route path="/" exact element={<StreamList />} />

          <Route path="/streams/delete" element={<StreamDelete />} />
          <Route path="/streams/edit" element={<StreamEdit />} />
          <Route path="/streams/create" element={<StreamCreate />} />
          <Route path="/streams/show" element={<StreamShow />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
