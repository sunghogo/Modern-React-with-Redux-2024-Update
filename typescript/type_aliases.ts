/*
    Type aliases:
        - Defining custom type that can be a union of types
        - Interchangeable with interfaces
            - Use interfaces when:
                - Describing a plain object
                - Extending one type with another (since type aliases cannot be extended
            - Use type aliases when:
                - Computing a new type
*/

interface Image {
  src: string;
}

// type Image {
//     src: string;
//  } // OK

type LoggableValue = string | number | string[] | Image;

function logValue(value: LoggableValue) {}
