import React from "react";
import { Container } from "../../GlobalStyles";
import { pictureWallData } from "../../data/PictureWallData";
import { PhotoGallery,
        PictureWrapper,
        Pictures
} from "./PictureWallStyles";

const PictureWall = () => {
    return (
    <Container>
        <PhotoGallery>
            {pictureWallData.map((el) => (
                <PictureWrapper>
                    <Pictures src={el.img} />
                </PictureWrapper> 
            ))}
        </PhotoGallery>
    </Container>
    )
}

export default PictureWall