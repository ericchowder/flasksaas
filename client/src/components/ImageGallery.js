import Search from "./Search";
import Welcome from "./Welcome";
import ImageCard from "./ImageCard";
import { Container, Row, Col } from "react-bootstrap";

const ImageGallery = ({
  searchWord,
  setSearchWord,
  handleSearchSubmit,
  images,
  handleDeleteImage,
}) => (
  <>
    {/* setting word and setWord properties of Search comp */}
    <Search
      word={searchWord}
      setWord={setSearchWord}
      handleSubmit={handleSearchSubmit}
    />
    {/* margin top 4 */}
    <Container className="mt-4">
      {/* Renders images (if array is not empty), otherwise render Welcome comp */}
      {images.length ? (
        <>
          {/* Can be treated like phones tablets laptops
                      Phones allow 1 images per row
                      Tablets allow 2 images per row
                      Laptops allwo 3 images per row */}
          <Row xs={1} md={2} lg={3}>
            {/* Only insert ImageCard if images.length == true (an image exists)
                        !! converts to bool*/}
            {/* !!images.length && <ImageCard image={images[0]} /> */}
            {/* Uses JS map function to map each image in images array to new array
                        Each image in images array is now passed individually to new instance of ImageCard
                        key={i} allows for react to identify each array element more easily */}
            {/* i.e. images.map loops through "images" array based on length,
                        the value of the instance is assigned to "image" along with an index */}
            {images.map((image, i) => (
              <Col key={i} className="pb-3">
                <ImageCard image={image} deleteImage={handleDeleteImage} />
              </Col>
            ))}
          </Row>
        </>
      ) : (
        <Welcome />
      )}
    </Container>
  </>
);

export default ImageGallery;
