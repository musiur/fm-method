import { ChevronDown } from "lucide-react"
import { Checkbox } from "@/components/ui/checkbox"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"

export function FilterContent() {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h3 className="text-sm font-medium">Categories</h3>
        <Collapsible defaultOpen>
          <CollapsibleTrigger className="flex w-full items-center justify-between text-sm">
            <span>Development</span>
            <ChevronDown className="h-4 w-4" />
          </CollapsibleTrigger>
          <CollapsibleContent className="pt-2 pl-4 space-y-2">
            <div className="flex items-center space-x-2">
              <Checkbox id="web-dev" />
              <label htmlFor="web-dev" className="text-sm">
                Web Development
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="mobile-dev" />
              <label htmlFor="mobile-dev" className="text-sm">
                Mobile Development
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="game-dev" />
              <label htmlFor="game-dev" className="text-sm">
                Game Development
              </label>
            </div>
          </CollapsibleContent>
        </Collapsible>
        <Collapsible>
          <CollapsibleTrigger className="flex w-full items-center justify-between text-sm">
            <span>Business</span>
            <ChevronDown className="h-4 w-4" />
          </CollapsibleTrigger>
          <CollapsibleContent className="pt-2 pl-4 space-y-2">
            <div className="flex items-center space-x-2">
              <Checkbox id="entrepreneurship" />
              <label htmlFor="entrepreneurship" className="text-sm">
                Entrepreneurship
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="marketing" />
              <label htmlFor="marketing" className="text-sm">
                Marketing
              </label>
            </div>
          </CollapsibleContent>
        </Collapsible>
        <Collapsible>
          <CollapsibleTrigger className="flex w-full items-center justify-between text-sm">
            <span>Design</span>
            <ChevronDown className="h-4 w-4" />
          </CollapsibleTrigger>
          <CollapsibleContent className="pt-2 pl-4 space-y-2">
            <div className="flex items-center space-x-2">
              <Checkbox id="ui-ux" />
              <label htmlFor="ui-ux" className="text-sm">
                UI/UX Design
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="graphic-design" />
              <label htmlFor="graphic-design" className="text-sm">
                Graphic Design
              </label>
            </div>
          </CollapsibleContent>
        </Collapsible>
      </div>

      <div className="space-y-2">
        <h3 className="text-sm font-medium">Price</h3>
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <Checkbox id="free" />
            <label htmlFor="free" className="text-sm">
              Free
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="paid" />
            <label htmlFor="paid" className="text-sm">
              Paid
            </label>
          </div>
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="text-sm font-medium">Level</h3>
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <Checkbox id="beginner" />
            <label htmlFor="beginner" className="text-sm">
              Beginner
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="intermediate" />
            <label htmlFor="intermediate" className="text-sm">
              Intermediate
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="advanced" />
            <label htmlFor="advanced" className="text-sm">
              Advanced
            </label>
          </div>
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="text-sm font-medium">Duration</h3>
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <Checkbox id="short" />
            <label htmlFor="short" className="text-sm">
              0-3 hours
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="medium" />
            <label htmlFor="medium" className="text-sm">
              3-6 hours
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="long" />
            <label htmlFor="long" className="text-sm">
              6+ hours
            </label>
          </div>
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="text-sm font-medium">Rating</h3>
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <Checkbox id="4-5" />
            <label htmlFor="4-5" className="text-sm">
              4.5 & up
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="4-0" />
            <label htmlFor="4-0" className="text-sm">
              4.0 & up
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="3-5" />
            <label htmlFor="3-5" className="text-sm">
              3.5 & up
            </label>
          </div>
        </div>
      </div>
    </div>
  )
}

