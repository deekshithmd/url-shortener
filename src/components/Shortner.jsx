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
      setShortUrl(response?.data?.result?.full_short_link3);
      setOriginalUrl("");
    } catch (e) {
      console.log("Error occurred", e.message);
    }
  };

  return (
    <Container>
      <Header>URL Shortener</Header>
      <InnerContainer>
        <Input
          type="text"
          value={originalUrl}
          onChange={(e) => setOriginalUrl(e.target.value)}
        />
        <Button onClick={getShortenedUrl}>Short This Url</Button>
      </InnerContainer>
      {shortUrl.length > 0 && (
        <>
          <InnerContainer>
            <Display>{shortUrl}</Display>

            <CopyToClipboard text={shortUrl}>
              <Button>Copy To Clipboard</Button>
            </CopyToClipboard>
          </InnerContainer>
          <Button onClick={() => setShortUrl("")}>Clear ShortUrl</Button>
        </>
      )}
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

const Header = styled.h1`
  font-size: 24px;
  font-weight: 600;
  text-align: center;
`;

const InnerContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
`;

const Input = styled.input`
  padding: 10px 20px;
  border-radius: 10px;
  border: 1px solid green;
  font-size: 18px;
`;

const Button = styled.button`
  padding: 10px 20px;
  border-radius: 10px;
  border: 1px solid blue;
  font-weight: 700;
  &:hover {
    background: grey;
    cursor: pointer;
    color: white;
  }
`;

const Display = styled.div``;
