export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).send("Only POST requests are allowed.");
  }

  console.log("someone reached the end point");
  console.log("Body:", req.body);

  res.status(200).send("Received");
}
