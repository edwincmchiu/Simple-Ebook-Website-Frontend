<template>
    <div class="card text-center m-3">
        <h5 class="card-header">Rankings</h5>
        <div class="card-body">rankings: {{ msg }}</div>
    </div>
</template>

<script>
export default {
    name: "getRequestAsyncAwait",
    data() {
        return {
            msg: "Loading...",
        };
    },
    async created() {
        try {
            const url = "http://0.0.0.0:8000/books/1";
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            this.msg = data.title;
        } catch (error) {
            console.error("Error fetching data:", error);
            alert("Failed to fetch data. Please try again later.");
        }
    },
};
</script>

<style scoped>
.card {
    color: black;
    margin: 20px;
    padding: 20px;
    border-radius: 10px;
    background-color: #f9f9f9;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.card-header {
    font-size: 1.5em;
    margin-bottom: 10px;
}

.card-body {
    font-size: 1.2em;
}
</style>
