import React, { useState, useEffect } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import { Flex, Button, } from "@chakra-ui/react";
import { AiOutlineDownload } from "react-icons/ai";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
    
function Resume() {
    
    const [width, setWidth] = useState(1200);
    
    useEffect(() => {
        setWidth(window.innerWidth);
    }, []);
    return (
        <Flex direction="column" m="5" minHeight="100vh" justifyContent="center">
            <Flex justifyContent="center" mb="2.5">
                <a href="/NickCerneResume.pdf" download>
                    <Button leftIcon={<AiOutlineDownload/>}>
                        Download Resume
                    </Button>
                </a>
            </Flex>
            <Flex justifyContent="center" direction="column" align="center">
                <Document file="/NickCerneResume.pdf" onLoadError={console.error}>
                    <Page pageNumber={1} scale={width > 786 ? 1 : .6}></Page>
                </Document>
            </Flex>
        </Flex>
    );
}

export default Resume;