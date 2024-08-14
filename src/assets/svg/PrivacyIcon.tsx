interface PrivacyIconProps {
  on?: boolean;
  off?: boolean;
}

export default function PrivacyIcon({ on }: PrivacyIconProps) {
  return (
    <>
      {on ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M6.3077 21.5C5.80898 21.5 5.38302 21.3234 5.02982 20.9701C4.67661 20.6169 4.5 20.191 4.5 19.6923V10.3077C4.5 9.809 4.67661 9.38304 5.02982 9.02984C5.38302 8.67662 5.80898 8.50001 6.3077 8.50001H7.5V6.50001C7.5 5.25131 7.93782 4.18915 8.81345 3.31351C9.6891 2.43788 10.7513 2.00006 12 2.00006C13.2487 2.00006 14.3109 2.43788 15.1865 3.31351C16.0621 4.18915 16.5 5.25131 16.5 6.50001V8.50001H17.6922C18.191 8.50001 18.6169 8.67662 18.9701 9.02984C19.3233 9.38304 19.5 9.809 19.5 10.3077V19.6923C19.5 20.191 19.3233 20.6169 18.9701 20.9701C18.6169 21.3234 18.191 21.5 17.6922 21.5H6.3077ZM6.3077 20H17.6922C17.782 20 17.8557 19.9711 17.9134 19.9134C17.9711 19.8557 18 19.782 18 19.6923V10.3077C18 10.218 17.9711 10.1442 17.9134 10.0865C17.8557 10.0288 17.782 9.99999 17.6922 9.99999H6.3077C6.21795 9.99999 6.14423 10.0288 6.08652 10.0865C6.02882 10.1442 5.99997 10.218 5.99997 10.3077V19.6923C5.99997 19.782 6.02882 19.8557 6.08652 19.9134C6.14423 19.9711 6.21795 20 6.3077 20ZM12 16.75C12.4859 16.75 12.899 16.5798 13.2394 16.2394C13.5798 15.899 13.75 15.4859 13.75 15C13.75 14.5141 13.5798 14.101 13.2394 13.7606C12.899 13.4202 12.4859 13.25 12 13.25C11.5141 13.25 11.1009 13.4202 10.7606 13.7606C10.4202 14.101 10.25 14.5141 10.25 15C10.25 15.4859 10.4202 15.899 10.7606 16.2394C11.1009 16.5798 11.5141 16.75 12 16.75ZM8.99997 8.50001H15V6.50001C15 5.66668 14.7083 4.95834 14.125 4.37501C13.5416 3.79168 12.8333 3.50001 12 3.50001C11.1666 3.50001 10.4583 3.79168 9.87497 4.37501C9.29164 4.95834 8.99997 5.66668 8.99997 6.50001V8.50001Z"
            fill="black"
          />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M6.3077 8.50001H15V6.50001C15 5.66668 14.7083 4.95834 14.125 4.37501C13.5416 3.79168 12.8333 3.50001 12 3.50001C11.1666 3.50001 10.4583 3.79168 9.87497 4.37501C9.29164 4.95834 8.99997 5.66668 8.99997 6.50001H7.5C7.5 5.25131 7.93782 4.18915 8.81345 3.31351C9.6891 2.43788 10.7513 2.00006 12 2.00006C13.2487 2.00006 14.3109 2.43788 15.1865 3.31351C16.0621 4.18915 16.5 5.25131 16.5 6.50001V8.50001H17.6922C18.191 8.50001 18.6169 8.67662 18.9701 9.02984C19.3233 9.38304 19.5 9.809 19.5 10.3077V19.6923C19.5 20.191 19.3233 20.6169 18.9701 20.9701C18.6169 21.3234 18.191 21.5 17.6922 21.5H6.3077C5.80898 21.5 5.38302 21.3234 5.02982 20.9701C4.67661 20.6169 4.5 20.191 4.5 19.6923V10.3077C4.5 9.809 4.67661 9.38304 5.02982 9.02984C5.38302 8.67662 5.80898 8.50001 6.3077 8.50001ZM6.3077 20H17.6922C17.782 20 17.8557 19.9711 17.9134 19.9134C17.9711 19.8557 18 19.782 18 19.6923V10.3077C18 10.218 17.9711 10.1442 17.9134 10.0865C17.8557 10.0288 17.782 9.99999 17.6922 9.99999H6.3077C6.21795 9.99999 6.14423 10.0288 6.08652 10.0865C6.02882 10.1442 5.99997 10.218 5.99997 10.3077V19.6923C5.99997 19.782 6.02882 19.8557 6.08652 19.9134C6.14423 19.9711 6.21795 20 6.3077 20ZM12 16.75C12.4859 16.75 12.899 16.5798 13.2394 16.2394C13.5798 15.899 13.75 15.4859 13.75 15C13.75 14.5141 13.5798 14.101 13.2394 13.7606C12.899 13.4202 12.4859 13.25 12 13.25C11.5141 13.25 11.1009 13.4202 10.7606 13.7606C10.4202 14.101 10.25 14.5141 10.25 15C10.25 15.4859 10.4202 15.899 10.7606 16.2394C11.1009 16.5798 11.5141 16.75 12 16.75Z"
            fill="black"
          />
        </svg>
      )}
    </>
  );
}