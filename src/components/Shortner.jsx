import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import CopyToClipboard from "react-copy-to-clipboard";

export const Shortener = () => {
  const [originalUrl, setOriginalUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");

  const getShortenedUrl = async () => {
    try {
      const response = await axios(
        `https://api.shrtco.de/v2/shorten?url== ${originalUrl}`
      );
      setShortUrl(response?.data?.result?.full_short_link);
      setOriginalUrl("");
    } catch (e) {
      console.log("Error occurred", e.message);
    }
  };

  return (
    <Container>
      <Input
        type="text"
        value={originalUrl}
        onChange={(e) => setOriginalUrl(e.target.value)}
      />
      <Button onClick={getShortenedUrl}>Short This Url</Button>
      <Display>{shortUrl}</Display>
      <CopyToClipboard text={shortUrl}>
        <Button>Copy To Clipboard</Button>
      </CopyToClipboard>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 5px;
`;

const Input = styled.input``;

const Button = styled.button``;

const Display = styled.div``;
