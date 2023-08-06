import { Injectable } from "@nestjs/common";
import { appendFileSync, PathOrFileDescriptor, writeFileSync } from "node:fs";
import  { join } from "node:path";


@Injectable()
export default class AnalyticsService {

    eventlogs : string[] = []
    fileCreated : boolean = false 
    filePath : string 

    constructor(private tag : string) {
        this.filePath = join(__dirname, `${tag}`)
    
    }

    _flushEventsToFile() {
        const data = Buffer.from(this.eventlogs.join("\n"))
        if (!this.fileCreated) {
            this.fileCreated = true 
            writeFileSync(this.filePath, data)
        } else {
            appendFileSync(this.filePath, data)
        }
        this.eventlogs.splice(0, 10)
    }

    logEvent(eventName : string, eventData : any) {
        this.eventlogs.push(`Event:${eventName}_${JSON.stringify(eventData)}`)
        
        if (this.eventlogs.length == 10) {
            console.log(`FLUSHING to file ${this.filePath}`)
            this._flushEventsToFile()    
        }
    }   
}