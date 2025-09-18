// BRING IN DEPENDENCIES ======================================================
// ============================================================================

    const ejs = require("ejs")
    const express = require("express")
    const mongoose = require("mongoose")
    const bodyParser = require("body-parser")

// SETUP ENV ENTRIES ==========================================================
// ============================================================================

    const dotenv = require("dotenv")

    dotenv.config()

    const getSeason = process.env.openSeason

    mongoose.connect(getSeason)

// SETUP EXPRESS ==============================================================
// ============================================================================

    const app = express()

// SETUP BODY PARSER ==========================================================
// ============================================================================

    app.use(bodyParser.urlencoded({extended: true}))

    app.use(bodyParser.json())

// SETUP STATIC PATHS =========================================================
// ============================================================================

    // FOR STYLES =============================================================
    // ========================================================================

        app.use("/public/styles", express.static("./public/styles"))

    // FOR SCRIPTS ============================================================
    // ========================================================================

        app.use("/public/scripts", express.static("./public/scripts"))

    // FOR IMAGES =============================================================
    // ========================================================================

        app.use("/public/images", express.static("./public/images"))

// SETUP EJS VIEWER ===========================================================
// ============================================================================

    app.set("view engine", "ejs")

// SETUP MONGOOSE =============================================================
// ============================================================================

    // mongoose.connect(`${getSeason}`)

        // SETUP SCHEMAS FOR DATA PUSHES ======================================
        // ====================================================================

            // FOR HOME PAGE ==================================================
            // ================================================================

                // CURRENT NAV BAR LOGO =======================================
                // ============================================================

                    const navBarCurrentLogoSchema = {

                        currentLogoEnglish:String,
                        currentLogoArabic:String

                    }

                // CURRENT INTRO BLOCK ========================================
                // ============================================================

                    // BACKGROUND IMAGE =======================================
                    // ========================================================

                        const introCurrentContentSchema = {

                            // TIME AND DATE =================================
                            // ===============================================

                                introSectionPostedTime:String,
                                introSectionPostedDate:String,

                            // BACKGROUND ====================================
                            // ===============================================

                                introCurrentBackgroundMain:String,

                            // HEADLINE ======================================
                            // ===============================================

                                introCurrentHeadlineMainEng:String,
                                introCurrentHeadlineMainArb:String,

                            // SUB HEADLINE ==================================
                            // ===============================================

                                introCurrentSubHeadlineMainEng:String,
                                introCurrentSubHeadlineMainArb:String,

                            // ACTION BUTTON =================================
                            // ===============================================

                                introCurrentActionButtonStatus:String,
                                introCurrentActionButtonTextMainEng:String,
                                introCurrentActionButtonTextMainArb:String,
                                introCurrentActionButtonFormat:String,

                            // TECHFRAME =====================================
                            // ===============================================

                                introCurrentTechFrameMain:String,

                            // SUBMITTER DEPARTMENT ==========================
                            // ===============================================

                                introCurrentSubmitterDepartmentMain:String,

                            // SUBMITTER NAME ================================
                            // ===============================================

                                introCurrentSubmitterNameMain:String

                        }

// SETUP NEW POSTS TO MONGOOSE ================================================
// ============================================================================

    // FOR NAV BAR LOGO =======================================================
    // ========================================================================

    // FOR BACKGROUND IMAGE ===================================================
    // ========================================================================

        const introCurrentContent = mongoose.model("introSection", introCurrentContentSchema)







// SETUP GET AND POST PATHS ===================================================
// ============================================================================

    // GET PATHWAYS ===========================================================
    // ========================================================================

        // FOR MAIN SITE HOME PAGE ============================================
        // ====================================================================

            app.get("/", function (req, res) {

                // SETUP TIME AND DATE STAMPS =================================
                // ============================================================

                    // SETUP VRAIABLES ========================================
                    // ========================================================

                        // SETUP VRAIABLES FOR TIME AND DATE STRINGS ==========
                        // ====================================================

                            const timeAndDateInitiate = new Date()

                                // SETUP VARIABLES TO GET TIME MARKERS =======
                                // ===========================================

                                    const hour = timeAndDateInitiate.getHours()
                                    const minute = timeAndDateInitiate.getMinutes()

                                // SETUP VARIABLES TO GET DATE MARKERS =======
                                // ===========================================

                                    const day = timeAndDateInitiate.getDate()
                                    const month = timeAndDateInitiate.getMonth()
                                    const year = timeAndDateInitiate.getFullYear()

                        // SETUP VRAIABLES FOR ARRAYS =========================
                        // ====================================================

                            const monthMappers = [
                                
                                "JAN", "FEB", "MAR", "APR", "MAY", "JUN",
                                "JUL", "AUG", "SEP", "OCT", "NOV", "DEC",
                            
                            ]

                        // SETUP FULL CONSTRUCTED STRINGS =====================
                        // ====================================================

                            // MAKE FULL IME AND DATE STRINGS =================
                            // ================================================

                                var currentTime = `${hour}H${minute}`
                                var currentDate = `${day} ${monthMappers[month]} ${year}`








                // SETUP FIND SCHEMA FROM MONGO DB ============================
                // ============================================================

                    introCurrentContent.find().then((introCurrents => {


                        // RENDER PAGE WITH RETRIEVED LIST ====================
                        // ====================================================

                            res.render("mainSiteRoutes/indexMainSite", {

                                introContentStylesList: introCurrents

                            })

                    }))

            })





        // FOR APPROVER SITE HOME PAGE ========================================
        // ====================================================================

            app.get("/approverAdmin", function (req, res) {

                // SETUP TIME AND DATE STAMPS =================================
                // ============================================================

                    // SETUP VRAIABLES ========================================
                    // ========================================================

                        // SETUP VRAIABLES FOR TIME AND DATE STRINGS ==========
                        // ====================================================

                            const timeAndDateInitiate = new Date()

                                // SETUP VARIABLES TO GET TIME MARKERS =======
                                // ===========================================

                                    const hour = timeAndDateInitiate.getHours()
                                    const minute = timeAndDateInitiate.getMinutes()

                                // SETUP VARIABLES TO GET DATE MARKERS =======
                                // ===========================================

                                    const day = timeAndDateInitiate.getDate()
                                    const month = timeAndDateInitiate.getMonth()
                                    const year = timeAndDateInitiate.getFullYear()

                        // SETUP VRAIABLES FOR ARRAYS =========================
                        // ====================================================

                            const monthMappers = [
                                
                                "JAN", "FEB", "MAR", "APR", "MAY", "JUN",
                                "JUL", "AUG", "SEP", "OCT", "NOV", "DEC",
                            
                            ]

                        // SETUP FULL CONSTRUCTED STRINGS =====================
                        // ====================================================

                            // MAKE FULL IME AND DATE STRINGS =================
                            // ================================================

                                var currentTime = `${hour}H${minute}`
                                var currentDate = `${day} ${monthMappers[month]} ${year}`








                // SETUP FIND SCHEMA FROM MONGO DB ============================
                // ============================================================

                    introCurrentContent.find().then((changeRequest => {


                        // RENDER PAGE WITH RETRIEVED LIST ====================
                        // ====================================================

                            res.render("approverSiteRoutes/indexApproverSite", {

                                changeRequestList: changeRequest

                            })

                    }))




                    // introCurrentContent.find().then((changeRequest => {

                    //     introCurrentContent.find().then((testCase => {


                            


                    //         // RENDER PAGE WITH RETRIEVED LIST ====================
                    //         // ====================================================

                    //             res.render("approverSiteRoutes/indexApproverSite", {

                    //                 changeRequestList: changeRequest,
                    //                 testList: testCase

                    //             })



                    //     }))

                    // }))



            })

    // POST PATHWAYS ==========================================================
    // ========================================================================

        // FOR HOME PAGE ======================================================
        // ====================================================================

            // FOR NAV BAR POST ===============================================
            // ================================================================

            // FOR INTRO SECTION POST =========================================
            // ================================================================

                app.post("/", function (req, res) {

                    // SETUP TIME AND DATE STAMPS =============================
                    // ========================================================

                        // SETUP VRAIABLES ====================================
                        // ====================================================

                            // SETUP VRAIABLES FOR TIME AND DATE STRINGS ======
                            // ================================================

                                const timeAndDateInitiate = new Date()

                                    // SETUP VARIABLES TO GET TIME MARKERS ====
                                    // ========================================

                                        const hour = timeAndDateInitiate.getHours()
                                        const minute = timeAndDateInitiate.getMinutes()

                                    // SETUP VARIABLES TO GET DATE MARKERS ====
                                    // ========================================

                                        const day = timeAndDateInitiate.getDate()
                                        const month = timeAndDateInitiate.getMonth()
                                        const year = timeAndDateInitiate.getFullYear()

                            // SETUP VRAIABLES FOR ARRAYS =====================
                            // ================================================

                                const monthMappers = [
                                    
                                    "JAN", "FEB", "MAR", "APR", "MAY", "JUN",
                                    "JUL", "AUG", "SEP", "OCT", "NOV", "DEC",
                                
                                ]

                            // SETUP FULL CONSTRUCTED STRINGS =================
                            // ================================================

                                // MAKE FULL IME AND DATE STRINGS =============
                                // ============================================

                                    var currentTime = `${hour}H${minute}`
                                    var currentDate = `${day} ${monthMappers[month]} ${year}`

                    // CREATE NEW POSTS FOR FIELDS ============================
                    // ========================================================

                        // FOR NAV BAR POSTS ==================================
                        // ====================================================

                        // FOR INTRO SECTION POSTS ============================
                        // ====================================================

                            let newIntroCurrentContent = new introCurrentContent ({

                                // TIME AND DATE ==============================
                                // ============================================

                                    introSectionPostedTime:currentTime,
                                    introSectionPostedDate:currentDate,

                                // BACKGROUND =================================
                                // ============================================

                                    introCurrentBackgroundMain:req.body.mainScreenBackground,

                                // HEADLINE ===================================
                                // ============================================

                                    introCurrentHeadlineMainEng:req.body.mainScreenEnglishHeadline,
                                    introCurrentHeadlineMainArb:req.body.mainScreenArabicHeadline,

                                // SUB HEADLINE ===============================
                                // ============================================

                                    introCurrentSubHeadlineMainEng:req.body.mainScreenEnglishSubHeadline,
                                    introCurrentSubHeadlineMainArb:req.body.mainScreenArabicSubHeadline,

                                // ACTION BUTTON ==============================
                                // ============================================

                                    introCurrentActionButtonStatus:req.body.mainScreenEnglishActionButtonStatus,
                                    introCurrentActionButtonTextMainEng:req.body.mainScreenEnglishActionButtonText,
                                    introCurrentActionButtonTextMainArb:req.body.mainScreenArabicActionButtonText,
                                    introCurrentActionButtonFormat:req.body.mainScreenArabicActionButtonFormat,

                                // TECHFRAME ==================================
                                // ============================================

                                    introCurrentTechFrameMain:req.body.mainScreenTechframe,

                                // SUBMITTER DEPARTMENT =======================
                                // ============================================

                                    introCurrentSubmitterDepartmentMain:"marketing",

                                // SUBMITTER NAME =============================
                                // ============================================

                                    introCurrentSubmitterNameMain:"this person"


                            })

                    // SAVE POSTS TO MONGO DB =================================
                    // ========================================================

                        newIntroCurrentContent.save()

                    // REDIRECT BACK TO PAGE ==================================
                    // ========================================================

                        res.redirect("/")

                })

// SETUP APP PORTS ============================================================
// ============================================================================

    const port = process.env.PORT || 8081

    app.listen(port, function () {

        console.log(`${port} is live...`)

    })