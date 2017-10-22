class Timestamp {
    postedOn(timestamp)
    {
        return moment(timestamp).subtract(timestamp, 'days').calendar();
    }
}

export default Timestamp;