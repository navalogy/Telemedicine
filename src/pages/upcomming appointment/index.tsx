import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import VerticalNavPatient from "../../components/verticalNavPatient";

type Booking = {
  Date: string;
  Time: string;
  Slot_Number: number;
};

type Doctor = {
  doctor_name: string;
  doctor_email: string;
  doctor_mobileno: string;
  doctor_specilization: string;
  bookings: Booking[];
};

interface PrevProps {
  Doc_ID: string;
  P_Email: string;
  Book_Date: string;
}

type ApiResponse = {
  Status: {
    message: string;
    information: Doctor[];
  };
};

const UpcomingAppointment = () => {
  const name = useSelector(
    (state: {
      user: {
        email: string;
        name: string;
        gender: string;
        dob: string;
        city: string;
        state: string;
      };
    }) => state.user
  );
  const [data, setData] = useState<ApiResponse | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post<ApiResponse>(
          "https://makemytwin.com/IoMTAppAPI/api/upcomingBookingsPatient.php",
          {
            patient_email: name.email,
          }
        );
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };

    fetchData();
  }, []);

  if (!data) {
    return (
      <div className="flex justify-center items-center mt-[25%] text-2xl font-bold text-blue-900">
        Loading...
      </div>
    );
  }

  return (
    <>
      <VerticalNavPatient />
      <div className="sm:ml-12 md:ml-24 lg:ml-32 xl:ml-48 mt-10">
        <h1 className="text-xl sm:text-2xl font-bold mb-4 text-blue-600">
          {data.Status.message}
        </h1>
        {data.Status.information &&
          data.Status.information.map((doctor, index) => (
            <div
              key={index}
              className="mb-4 p-4 bg-white shadow-lg rounded-lg sm:flex sm:justify-between sm:items-center"
            >
              <div>
                <h2 className="text-lg sm:text-xl font-semibold text-blue-500">
                  {doctor.doctor_name}
                </h2>
                <p className="text-gray-600">{doctor.doctor_email}</p>
                <p className="text-gray-600">{doctor.doctor_mobileno}</p>
                <p className="text-gray-600">{doctor.doctor_specilization}</p>
              </div>
              <div>
                <h3 className="font-semibold text-blue-500">Bookings:</h3>
                {doctor.bookings &&
                  doctor.bookings.map((booking, index) => (
                    <div
                      key={index}
                      className="p-2 mt-2 bg-gray-100 rounded sm:flex sm:justify-between sm:items-center flex-col"
                    >
                      <p className="text-gray-700">Date: {booking.Date}</p>
                      <p className="text-gray-700">Time: {booking.Time}</p>
                      <p className="text-gray-700">
                        Slot Number: {booking.Slot_Number}
                      </p>
                    </div>
                  ))}
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default UpcomingAppointment;
