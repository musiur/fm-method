import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion";
  import { TypeDetailsChapter, TypeDetailsChapterLesson, TypeDetailsSyllabus } from "../[slug]/type-details";
  import { BookIcon, CheckCircle, Lock, Notebook, PlayCircle } from "lucide-react";
  import clsx from "clsx";
  import Link from "next/link";
import { Play } from "./play";
  
  export const Playlist = (props: TypeDetailsSyllabus) => {
    return (
      <Accordion type="single" collapsible className="w-full space-y-4">
        {props?.chapters?.map((chapter: TypeDetailsChapter) => (
          <AccordionItem key={chapter.id} value={`${chapter.id}`} className="border rounded-lg px-4">
            <AccordionTrigger className="hover:no-underline py-4">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600 font-medium">
                  <BookIcon />
                </div>
                <span className="font-medium text-lg">{chapter.title}</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="pt-2 pb-4">
              <Accordion type="single" collapsible className="w-full">
                {!chapter?.lessons?.length ? <div className="px-4 py-2 bg-black/5">No lesson found!</div> : null}
                {chapter?.lessons?.map((lesson: TypeDetailsChapterLesson) => (
                  <AccordionItem key={lesson.id} value={`${lesson.id}`} className="border-none">
                    <AccordionTrigger className="hover:no-underline py-2">
                      <div className="w-full flex flex-wrap items-center justify-between gap-4">
                        <div className="flex items-center gap-4">
                          <span className="text-gray-600">
                            <Notebook className={clsx("w-4 h-4", {
                              "hidden": !lesson.otp || lesson.progress_status === "complete"
                            })} />
                            <Lock className={clsx("w-4 h-4", {
                              "hidden": lesson.otp
                            })} />
                            <CheckCircle className={clsx("w-4 h-4", {
                              "hidden": lesson.otp || lesson.progress_status !== "complete"
                            })} />
                          </span>
                          <div className="text-left">
                            <h3 className="font-medium">{lesson.name || lesson.title}</h3>
                            <p className="text-sm text-gray-500">
                              {lesson.duration} hr • {lesson.status}
                            </p>
                          </div>
                        </div>
                        <Play video_id={lesson.video_id}/>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="pl-12 bg-black/5 py-2 pr-2">
                      <div dangerouslySetInnerHTML={{ __html: lesson.description || lesson.lesson_details }}></div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    );
  };
  