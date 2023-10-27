<template>
    <div class="people-chating">
        <div class="container-fluid">
            <div class="people-chating-titles h2">CHAT</div>

            <div class="people-chating-panel text-muted">
                <div class="row">
                    <div class="search-people">
                        <div class="row">
                            <div class="search-box">
                                <input type="search" placeholder="Find People...">
                                <div class="search-people-buttons">
                                    <button><i class="bi bi-search h3"></i></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="people-contact-item-list">
                        <div class="people-contact-item">
                            <div class="row">
                                <div class="people-avatar col-3 text-center">
                                    <img class="img-fluid rounded-circle border border-success border-3"
                                        src="https://yt3.googleusercontent.com/Mm5SrAzANV8yqC8MMKdnSEAf8Vx3U-mGy85jOHMUcX7OXb63SGtyfAp3r4_PzZJUS80BoELyfQ=s900-c-k-c0x00ffffff-no-rj"
                                        alt="">
                                </div>
                                <div class="people-contact-chating-text col-9">
                                    <div class="people-names text-white h4">
                                        Jonh Sin
                                    </div>
                                    <div class="people-chat-text text-white opacity-50">
                                        <span>You : </span> Awsome I'll Join your work, may i know what date?
                                    </div>
                                    <div class="people-chat-datetime text-white opacity-50" style="font-size: 15px;">
                                        Dec 25 2023 01:41PM
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
.people-chating-titles {
    font-family: koulen;
}

.people-chating-panel {
    height: 100%;
    width: 100%;
    background-color: var(---color-light-blue);
    border-radius: 8px;

}

/* search-box */
.search-people {
    padding: 15px;
}

.search-people .search-box {
    background-color: var(--color-dark);
    width: 100%;
    height: 40px;
    border-radius: 20px;
    padding: 2.5px;
}

.search-people .search-box input {
    width: 85%;
    height: 100%;
    float: left;
    border: none;
    outline: none;
    background-color: rgba(255, 255, 255, 0);
    color: var(--color-white-text);
    font-size: 20px;
    padding: 0px 10px;
}

.search-people .search-box .search-people-buttons button {
    background-color: rgba(0, 255, 255, 0);
    border: none;
    float: right;
    color: var(--color-white-text);
}

/* people contact list */
.people-contact-item-list {
    padding: 15px;
}

.people-contact-item {
    padding: 0px 15px;
}

.people-names {
    margin-bottom: 0px;
}

.people-chat-text {
    line-height: 1.5em;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
}</style>